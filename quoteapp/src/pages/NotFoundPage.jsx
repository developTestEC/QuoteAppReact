import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss';

const NotFoundPage = () => {
    const navigation = useNavigate();
    const goHome = () => {
        navigation("/");
    };
  return (
    <div className='not-found-container'>
        <div className='not-found-image'>
            <button className='go-home-button' onClick={goHome}>
                Ir al Inicio
            </button>
        </div>
    </div>
 

  );
}
export default NotFoundPage
