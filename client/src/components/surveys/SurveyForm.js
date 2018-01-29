// Shows form for user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // takes care of action creators, similar to connect helper
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Survey Line', name: 'subject' },
  { label: 'Email body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

  // could even customize error message by adding it to the FIELDS array of objects
  _.each(FIELDS, ({ name }) => {
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
  form: 'surveyForm'
})(SurveyForm);
