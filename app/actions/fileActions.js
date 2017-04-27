// @flow
import type { counterStateType } from '../reducers/fileReducer';
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  FILE_UPLOAD,
  CLEAR_FILE
} from './constants';

const XLSX = require('xlsx');

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: () => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: () => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

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
