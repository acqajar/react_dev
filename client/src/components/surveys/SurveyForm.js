// Shows form for user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // takes care of action creators, similar to connect helper
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          type="text"
          name={name}
          component={SurveyField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
            <i className="material-icons right">cancel</i>
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // if (!values.title) {
  //   errors.title = 'Must provide a title';
  // }
  // if (!values.subject) {
  //   errors.subject = 'Must provide a subject';
  // }
  // if (!values.body) {
  //   errors.body = 'Must provide a body';
  // }

  // could even customize error message by adding it to the formFields array of objects
  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `Must provide a ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  // validate: validate, convert in es6 to below
  validate,
  // decide how you want form to behave
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
