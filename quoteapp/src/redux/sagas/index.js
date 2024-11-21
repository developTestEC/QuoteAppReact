import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import notesSaga from "./notesSaga";

export default function* rootSaga() {
  yield all([authSaga(), notesSaga()]);
}
