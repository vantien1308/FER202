import React from 'react';
import SimpleCard from './components/SimpleCard';

const App = () => {
  const item = {
    title: 'A Title',
    description: 'The description goes here.',
    imageUrl: '' // hoặc để URL ảnh nếu muốn
  };

  return <SimpleCard item={item} />;
};

export default App;
