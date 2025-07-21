import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ username và password!");
      return;
    }

    const response = await fetch("http://localhost:3000/useraccounts");
    const users = await response.json();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert(`Login successfully with username: ${user.username}`);
      onLogin(user.username);
      navigate('/');
    } else {
      alert("Sai thông tin đăng nhập.");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;