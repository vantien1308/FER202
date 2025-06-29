import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/example1/Navigation';
import Home from './components/example1/Home';
import About from './components/example1/About';
import PostExample1 from './components/example1/Post';
import PostExample2 from './components/example2/Post';
import PostExample4 from './components/example4/Post';
import PostDetailExample1 from './components/example1/PostDetail';
import PostDetailExample4 from './components/example4/PostDetail';
import Login from './components/example3/Login';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <h1>React Router Examples</h1>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostExample1 />} />
          <Route path="/post/:id" element={<PostDetailExample1 />} />
          <Route path="/example2/posts" element={<PostExample2 />} />
          <Route path="/example4/posts" element={<PostExample4 />} />
          <Route path="/example4/post/:id" element={<PostDetailExample4 />} />
        </Routes>
      </Container>
    </div>
  );
}