import React, { useState } from 'react';
import Cards from './Cards';
import '../App.scss';


function Carousel() {
  const images = [
    'https://images.pexels.com/photos/29342224/pexels-photo-29342224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7249738/pexels-photo-7249738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5425632/pexels-photo-5425632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <section className="carousel" id="carousel">
      <button onClick={prevSlide} className="prev">❮</button>
      <Cards  title="pruebas" subtitle="otra prueba" image={images[current]}/>
      <button onClick={nextSlide} className="next">❯</button>
    </section>
  );
}

export default Carousel;

