// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import file from './fileReducer';
import automationInProgress from './automationReducer';

const rootReducer = combineReducers({
  file,
  automationInProgress,
  router,
  form: formReducer
});

export default rootReducer;
