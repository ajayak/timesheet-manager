// @flow
import {
  FILE_UPLOAD,
  CLEAR_FILE
} from './constants';

const XLSX = require('xlsx');

export function parseFile(file) {
  const workbook = XLSX.readFile(file.path);
  return {
    type: FILE_UPLOAD,
    payload: workbook
  };
}

export function clearFile() {
  return {
    type: CLEAR_FILE
  };
}
