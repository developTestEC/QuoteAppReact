import React from 'react'
import '../App.scss';

const Quote = (props) => {
    const {autor,libro,texto} = props
  return (
    <div className='quotebox'>
        <p >{texto}</p>
        <section className='quotebox__footer'>
            <p>{autor}</p>
            <p>{libro}</p>
        </section>
    </div>
  )
}
export default Quote;
