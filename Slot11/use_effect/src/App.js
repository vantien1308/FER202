import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import ValidatedInput from "./Components/ValidatedInput";
import LoginForm from "./Components/LoginForm";
import ComplexForm from "./Components/ComflexForm";

function App() {
  return (
    <div className="container mt-4">
      
      <ValidatedInput />
      
      <LoginForm />
      
      <ComplexForm />
    </div>
  );
}

export default App;
