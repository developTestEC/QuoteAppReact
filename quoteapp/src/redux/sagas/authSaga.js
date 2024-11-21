import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "../auth/authSlice";
import { callLogin } from "../../http/api";

function* handleLogin(action) {
  try {
    // Aquí harías una llamada a la API, por ejemplo:
    const response = yield call(callLogin, action.payload);
    const token = response.data; // Supongamos que el token viene en `data.token`
    localStorage.setItem("authToken", token); // Guardamos el token localmente
    const data = {
      token: token,
      username: action.payload.username,
    };
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function apiLogin(credentials) {
  // Simulación de autenticación de API (puedes reemplazar con una llamada real a una API)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === "user" &&
        credentials.password === "password"
      ) {
        resolve({ username: "user" });
      } else {
        reject(new Error("Credenciales inválidas"));
      }
    }, 1000);
  });
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
