// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import file from './fileReducer';

const rootReducer = combineReducers({
  file,
  router,
  form: formReducer
});

export default rootReducer;
