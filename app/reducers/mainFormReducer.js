// @flow
import { FORM_SUBMIT } from '../actions/constants';
var exec = require('child_process').exec;
import { escape } from 'lodash';

type actionType = {
  type: string
};

export default function counter(state = [], action: actionType) {
  switch (action.type) {
    case FORM_SUBMIT:
      const { file, values } = action.payload;
      const fileArg = escape(JSON.stringify(file));
      const valuesArg = escape(JSON.stringify(values));
      if (values.createTask) {
        exec(`node app\\task\\create.js "${fileArg}" "${valuesArg}"`, function(error, stdout, stderr) {
          // command output is in stdout
          console.log(error, stdout, stderr);
          console.log(__dirname);
        });
      }
      if (values.fillTask) {
        console.log('filling task');
      }
      return state;
    default:
      return state;
  }
}
