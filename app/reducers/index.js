// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import file from './fileReducer';
import mainForm from './mainFormReducer';
import automationInProgress from './automationReducer';

const rootReducer = combineReducers({
  file,
  mainForm,
  automationInProgress,
  router,
  form: formReducer
});

export default rootReducer;
