import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import "./App.scss";
import Landing from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import UserNotesPage from "./pages/UserNotesPage";
import FormQuotePage from "./pages/FormQuotePage";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notes" element={<UserNotesPage />} />
          <Route path="/add" element={<FormQuotePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
