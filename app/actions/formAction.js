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
    dispatch(submit(file, values));
    dispatch(endAutomation());
  };
}
