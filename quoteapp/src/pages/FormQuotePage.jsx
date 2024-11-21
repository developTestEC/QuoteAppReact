import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../App.scss';
import { useNavigate } from "react-router-dom";
import { addQuoteRequest } from "../redux/notes/notesSlice";

const FormQuotePage = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      quote: "",
      bookTitle: "",
      author: "",
    });
    const navigation = useNavigate();
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.quote && formData.bookTitle && formData.author) {
          dispatch(addQuoteRequest(formData));
          setFormData({ quote: "", bookTitle: "", author: "" }); // Reset formulario
          navigation(-1);
        } else {
          alert("Todos los campos son obligatorios.");
        }
      };
      const handleCancel = ()=> {
        navigation(-1);
      }
  return (
    <div className="add-quote-page">
      <h2>Agregar Nueva Cita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="quote">Cita</label>
          <textarea
            id="quote"
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            rows="4"
            placeholder="Escribe la cita..."
          />
        </div>
        <div>
          <label htmlFor="bookTitle">Título del Libro</label>
          <input
            id="bookTitle"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            type="text"
            placeholder="Título del libro"
          />
        </div>
        <div>
          <label htmlFor="author">Autor</label>
          <input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            type="text"
            placeholder="Autor del libro"
          />
        </div>
        <button type="submit">Agregar Cita</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};


export default FormQuotePage;