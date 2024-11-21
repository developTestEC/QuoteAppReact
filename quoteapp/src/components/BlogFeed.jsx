import React from 'react'
import FeedbackCards from './FeedbackCards';

export default function BlogFeed() {
const feedback = [
    {
        title:"Andrew Chang",
        subtitle:"Accede a citas de libros con QuoteApp",
        image:"",
        views:1,

    },
];

  return (
    <section className='blogfeedback'>
    <h2>Blog FeedBack</h2>
    <div className='blogfeedback__content'>
    <FeedbackCards title = "Inspiración Diaria" 
    subtitle= "QuoteApp me permite llevar conmigo las mejores citas de mis libros favoritos. Es fácil de usar y siempre encuentro algo que me inspira."
    image="https://images.pexels.com/photos/17601734/pexels-photo-17601734/free-photo-of-mujer-mano-diseno-libro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    views="10"
    autor= "Laura G."/>
     <FeedbackCards title = "Perfecto para amantes de los libros" 
    subtitle= "QuoteApp me ayuda a recordar esas frases impactantes que no quiero olvidar. Una gran herramienta para cualquier lector ávido."
    image="https://images.pexels.com/photos/17601680/pexels-photo-17601680/free-photo-of-libros-diseno-cubre-literatura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    views="1"
    autor= "Carlos M"/>
     <FeedbackCards title = "Citas al alcance de la mano" 
    subtitle= "La forma ideal de guardar y organizar mis citas favoritas. Es rápida y me permite revivir esas ideas cuando más las necesito."
    image="https://images.pexels.com/photos/4956957/pexels-photo-4956957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    views="1"
    autor= "Andrew Chang"/>
    </div>
    </section>
  )
}
