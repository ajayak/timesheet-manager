import { FORM_SUBMIT } from './constants';

function submit(file, values) {
  return {
    type: FORM_SUBMIT,
    payload: {
      file,
      values
    }
  };
}

export function submitForm(values) {
  return (dispatch: () => void, getState) => {
    const { file } = getState();
    dispatch(submit(file, values));
  };
}
