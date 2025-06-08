// src/components/Title.jsx

import React from 'react';

const Title = ({ text }) => (
  <div className="fw-bold" style={{ color: 'darkorange', fontSize: '20px' }}>
    {text}
  </div>
);

export default Title; // <- DÒNG NÀY PHẢI CÓ
