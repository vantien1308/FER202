import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <h1>Quản lý Bài Viết</h1>
        <Routes>
          <Route path="/" element={user ? <PostList /> : <Login onLogin={setUser} />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;