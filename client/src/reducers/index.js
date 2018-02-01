import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; // call it something other than reducer
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
