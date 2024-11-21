import { combineReducers } from "redux";
import authReducer from "../auth/authSlice";
import notesReducer from "../notes/notesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

export default rootReducer;
