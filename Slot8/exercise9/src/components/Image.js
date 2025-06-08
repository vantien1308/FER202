import React from 'react';
import { Image as RBImage } from 'react-bootstrap';

const Image = ({ url }) => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{
      backgroundColor: '#ffeeaa',
      width: '80px',
      height: '100px',
      fontWeight: 'bold',
      fontSize: '24px',
      color: 'orange',
      borderRight: '1px solid #ccc'
    }}
  >
    {url ? <RBImage src={} alt="img" fluid style={{ maxHeight: '80px' }} /> : 'IMG'}
  </div>
);

export default Image;
