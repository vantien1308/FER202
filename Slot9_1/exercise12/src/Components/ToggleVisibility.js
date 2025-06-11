import React, { useState } from 'react';

function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;
