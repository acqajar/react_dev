import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; // call it something other than reducer
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
