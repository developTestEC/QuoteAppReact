import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchNotesRequest: (state) => {
      state.loading = true;
    },
    fetchNotesSuccess: (state, action) => {
      state.loading = false;
      state.notes = action.payload;
    },
    fetchNotesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addQuoteRequest: (state) => {
      state.loading = true;
    },
    addQuoteSucces: (state, action) => {
      state.loading = false;
      state.notes = [...state.notes, action.payload];
    },
    addQuoteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesFailure,
  addQuoteFailure,
  addQuoteRequest,
  addQuoteSucces,
} = notesSlice.actions;
export default notesSlice.reducer;
export const selectNotes = (state) => state.notes.notes;
export const selectNotesLoading = (state) => state.notes.loading;
export const selectNotesError = (state) => state.notes.error;
export const selectAddQuotesLoading = (state) => state.notes.loading;
