// @flow
import { FORM_SUBMIT } from '../actions/constants';

type actionType = {
  type: string
};

export default function counter(state = [], action: actionType) {
  switch (action.type) {
    case FORM_SUBMIT:
      const { file, values } = action.payload;
      return state;
    default:
      return state;
  }
}
