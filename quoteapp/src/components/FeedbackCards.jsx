import React from 'react'

export default function FeedbackCards(props) {
    const {title,subtitle,image,views,autor} = props;
  return (
    <div className='feedbackCards'>
        <div>
            <img src={image} alt={title} />
        </div>
        <div>
            <p className='author'>{autor}</p>
            <h4>{title}</h4>
            <h6>{subtitle}</h6>
            <hr></hr>
            <div className='feedbackCards__content'>
            <img 
            src="https://www.clipartmax.com/png/small/87-870923_view-icon-bird-eye-view-eye-symbol.png"
            alt="views"/>
            <p>{views}</p>
            </div>
        </div>
    </div>
  )
}
