import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesFailure,
  addQuoteFailure,
  addQuoteRequest,
  addQuoteSucces,
} from "../notes/notesSlice";
import { fetchQuotes, addQuote } from "../../http/api";

function* handleFetchNotes() {
  try {
    const notes = yield call(fetchQuotes);
    console.log("Notes:", notes.data);
    yield put(fetchNotesSuccess(notes.data));
  } catch (error) {
    yield put(fetchNotesFailure(error.message));
  }
}
function* handleAddQuote(action) {
  try {
    console.log("====================");
    const quote = yield call(addQuote, action.payload);
    yield put(addQuoteSucces(quote.data));
  } catch (error) {
    yield put(addQuoteFailure(error.message));
  }
}

function apiFetchNotes() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Note 1", "Note 2", "Note 3"]), 1000)
  );
}

export default function* notesSaga() {
  yield takeLatest(fetchNotesRequest.type, handleFetchNotes);
  yield takeLatest(addQuoteRequest.type, handleAddQuote);
}
