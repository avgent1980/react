import React from 'react';
import { call, all, fork, put, takeLatest } from 'redux-saga/effects';

import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
} from '../reducers/user';

const dummyData = {
  me : {
    name: "김건용",
    nickname: "Nemesis",
    src: "https://pixnio.com/free-images/2017/11/30/2017-11-30-18-20-26-900x900.jpg",
  },
}

/* function logInAPI(data) {

} */

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data)
    yield put({
      type: LOG_IN_SUCCESS,
      data: dummyData.me,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* logOut(action) {
  try {
    // const result = yield call(logInAPI, action.data)
    yield put({
      type: LOG_OUT_SUCCESS,
      data: dummyData.me,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut)
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}