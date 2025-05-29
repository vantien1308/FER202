import React from 'react';

const Ex4 = () => {
  return (
    <div>

      {/* Header */}
      <div style={{ backgroundColor: '#e8912d', padding: '20px', textAlign: 'center' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1074px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png?20240228115915" 
          alt="FPT University Logo" 
          style={{background: 'white', width: '300px', padding: '20px'}} 
        />
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* Content */}
      <div className="text-center mt-5 mb-5">
        <h5><strong>About</strong></h5>
        <p>This is the about section of the website.</p>

        <h5 className="mt-4"><strong>Contact</strong></h5>
        <p>For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#f5c16c', padding: '15px', textAlign: 'center', color: 'white' }}>
        © 2023 Website. All rights reserved.
      </div>
    </div>
  );
};

export default Ex4;
