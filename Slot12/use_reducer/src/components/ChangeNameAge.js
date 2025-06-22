import React, { useReducer } from "react";
import { Form, Container } from "react-bootstrap";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

 return (
    <Container className="mt-4">
      <h2>Exercise 2</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
            placeholder="Input name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="text"
            value={state.age}
            onChange={(e) => dispatch({ type: "SET_AGE", value: e.target.value })}
            placeholder="Input age"
          />
        </Form.Group>
      </Form>
      <h3>Name: {state.name}</h3>
      <h3>Age: {state.age}</h3>
    </Container>
  );
}

export default ChangeNameAge;
