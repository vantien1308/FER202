import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const heroImages = [
  '/images/pizza1.jpg',
  '/images/pizza2.jpg',
  '/images/pizza3.jpg',
  '/images/pizza4.jpg',
  '/images/pizza5.jpg',
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3500} style={{ backgroundColor: '#333', marginBottom: '20px' }}>
      {heroImages.map((img, idx) => (
        <Carousel.Item key={img}>
          <Image src={img} alt={`Pizza ${idx + 1}`} className="d-block w-100" style={{ objectFit: 'cover', height: '350px' }} />
          {
            <Carousel.Caption className="d-none d-md-block" style={{ color: '#fff', textShadow: '1px 1px 5px #000' }}>
              <h1 className="display-4">Neapolitan Pizza</h1>
              <p className="lead">If you are looking for a traditional Italian pizza,the Neapolitan is the best option!</p>
            </Carousel.Caption>
          }
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;