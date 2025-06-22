import React, { useReducer } from "react";
import { Button, Container } from "react-bootstrap";
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

 return (
    <Container className="text-center mt-4">
      <h2>Exercise 1</h2>
      <h1>Counter: {state.count}</h1>
      <Button variant="primary" className="me-2" onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
      <Button variant="danger" className="me-2" onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
      <Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
    </Container>
  );

}

export default Counter;
