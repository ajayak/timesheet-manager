// @flow
import { BEGIN_AUTOMATION, END_AUTOMATION } from '../actions/constants';

type actionType = {
  type: string
};

export default function counter(state = false, action: actionType) {
  switch (action.type) {
    case BEGIN_AUTOMATION:
      return true;
    case END_AUTOMATION:
      return false;
    default:
      return state;
  }
}
