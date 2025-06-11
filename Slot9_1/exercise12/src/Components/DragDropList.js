import React, { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (index) => {
    const draggedOverItem = items[index];

    if (draggingItem === index) return;

    const newItems = items.filter((_, i) => i !== draggingItem);
    newItems.splice(index, 0, items[draggingItem]);

    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}
          style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '5px', cursor: 'grab' }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragDropList;
