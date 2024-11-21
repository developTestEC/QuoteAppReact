import axios from "axios";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../redux/auth/authSlice";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// Middleware para agregar el token automáticamente
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    console.log("tokens", token); // Obtiene el token del localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agrega el token al encabezado
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const callLogin = (credentials) => {
  const { username, password } = credentials;
  console.log("credencial", credentials);
  const body = JSON.stringify({
    username,
    password,
  });
  console.info(body);
  return instance.post("/login", body);
};
export const fetchQuotes = () => {
  return instance.get("/api/quotes/all");
};
export const addQuote = (credentials) => {
  console.log("aqui", credentials);
  const { quote, author, bookTitle } = credentials;
  const body = JSON.stringify({
    autor: author,
    libro: bookTitle,
    texto: quote,
    usuarioId: "1",
  });
  return instance.post("/api/quotes/add", body);
};
