import React from 'react'

const Cards = ({title, subtitle, image}) => {
  return (
    <div className='cards'>
        <img src={image} alt='imagen'/>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
    </div>
  )
}

export default Cards
