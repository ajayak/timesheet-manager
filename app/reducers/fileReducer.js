// @flow
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  FILE_UPLOAD
} from '../actions/constants';

type actionType = {
  type: string
};

function parseWorkbook(workbook) {
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const result = {};
  Object.keys(sheet).forEach(key => {
    const column = key.substr(1);
    if (/^\d+$/.test(+column)) {
      if (!result[column]) result[column] = [];
      return result[column].push(sheet[key].v);
    }
  });
  return result;
}

export default function counter(state = [], action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case FILE_UPLOAD:
      const workbook = parseWorkbook(action.payload);
      return workbook;
    default:
      return state;
  }
}
