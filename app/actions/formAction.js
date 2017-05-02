var exec = require('child_process').exec;
import { escape } from 'lodash';
import {
  FORM_SUBMIT,
  BEGIN_AUTOMATION,
  END_AUTOMATION
} from './constants';

function submit(file, values) {
  return {
    type: FORM_SUBMIT,
    payload: {
      file,
      values
    }
  };
}

function beginAutomation() {
  return {
    type: BEGIN_AUTOMATION
  };
}

function endAutomation() {
  return {
    type: BEGIN_AUTOMATION
  };
}

export function submitForm(values) {
  return (dispatch: () => void, getState) => {
    dispatch(beginAutomation());
    const { file } = getState();
    const fileArg = escape(JSON.stringify(file));
    const valuesArg = escape(JSON.stringify(values));
    console.log(valuesArg);
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

    dispatch(endAutomation());
  };
}
