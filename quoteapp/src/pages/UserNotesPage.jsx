import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotesRequest, selectNotes, selectNotesError, selectNotesLoading } from '../redux/notes/notesSlice';
import { selectUser } from '../redux/auth/authSlice';
import Quote from '../components/Quote';
import { useNavigate } from 'react-router-dom';
import '../App.scss';
const UserNotesPage = () => {
  
  const dispatch = useDispatch();
    const quotes = useSelector(selectNotes);
    const loading = useSelector(selectNotesLoading);
    const error = useSelector(selectNotesError);
    const user = useSelector(selectUser);
    const navegation = useNavigate();
    const handleClick = () => {
        console.log("Agregar nueva cita para mi ");
        navegation("/add");
    };

    useEffect(() => {
        dispatch(fetchNotesRequest()); // Despacha la acción para obtener las quotes
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='quotePage'>
            <div className='quotePage__header'>
            <h1>Hola,{user}</h1>
            <button
            onClick={handleClick}
            >+</button>
            </div>
            <h2>Todas las citas compartidas estan aquí</h2>
            <ul>
                {quotes.map((quote) => (
                    <li key={quote.id} className='quotelist'>
                        <Quote texto= {quote.texto} autor = {quote.autor} libro = {quote.libro}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserNotesPage;
