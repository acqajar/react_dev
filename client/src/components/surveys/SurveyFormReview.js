import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';

// <div>
//   <label>Survey Title</label>
//   <div>{formValues.title}</div>
//   <label>Survey Subject</label>
//   <div>{formValues.subject}</div>
//   <label>Email Body</label>
//   <div>{formValues.body}</div>
//   <label>Email Recipients</label>
//   <div>{formValues.emails}</div>
// </div>

const SurveyReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5> Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyReview);
