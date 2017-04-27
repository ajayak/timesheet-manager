// @flow
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  FILE_UPLOAD
} from '../actions/constants';

type actionType = {
  type: string
};

export default function counter(state, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case FILE_UPLOAD:
      return action.payload;
    default:
      return state;
  }
}
