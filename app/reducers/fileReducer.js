// @flow
import {
  FILE_UPLOAD,
  CLEAR_FILE
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

export default function counter(state = {}, action: actionType) {
  switch (action.type) {
    case FILE_UPLOAD:
      const workbook = parseWorkbook(action.payload);
      return workbook;
    case CLEAR_FILE:
      return {};
    default:
      return state;
  }
}
