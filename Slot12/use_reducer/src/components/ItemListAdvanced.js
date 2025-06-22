// src/components/Exercise4_ItemListAdvanced.js
import React, { useReducer, useState } from "react";
import { Button, Form, Container, ListGroup, InputGroup } from "react-bootstrap";

function advancedReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    case "SORT":
      const sorted = [...state.items];
      if (action.by === "alpha") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.by === "time") {
        sorted.sort((a, b) => a.id - b.id);
      }
      return { ...state, items: sorted };
    default:
      return state;
  }
}

const initialAdvancedState = { items: [], filter: "" };

function ItemListAdvanced() {
  const [state, dispatch] = useReducer(advancedReducer, initialAdvancedState);
  const [newItem, setNewItem] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [sortMethod, setSortMethod] = useState("alpha");

  const handleAdd = () => {
    if (newItem) {
      dispatch({ type: "ADD_ITEM", item: { id: Date.now(), name: newItem } });
      setNewItem("");
    }
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", id, newName: editValue });
    setEditId(null);
    setEditValue("");
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditValue("");
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortMethod(value);
    dispatch({ type: "SORT", by: value });
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2>Exercise 4</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter Item:</Form.Label>
          <Form.Control
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter item name"
          />
        </Form.Group>
        <Button variant="primary" className="mb-3" onClick={handleAdd}>
          Add Item
        </Button>

        <Form.Select
          className="mb-3"
          value={sortMethod}
          onChange={handleSortChange}
        >
          <option value="alpha">Sort by Name</option>
          <option value="time">Sort by Created Time</option>
        </Form.Select>

       
      </Form>

      <ListGroup>
        {filteredItems.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {editId === item.id ? (
              <div className="w-100 d-flex align-items-center gap-2">
                <Form.Control
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <Button size="sm" variant="success" onClick={() => handleSaveEdit(item.id)}>
                  Save
                </Button>
                <Button size="sm" variant="secondary" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              </div>
            ) : (
              <>
                {item.name}
                <div>
                  <Button size="sm" variant="warning" className="me-2" onClick={() => handleEdit(item.id, item.name)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="danger" onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
                    Remove
                  </Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ItemListAdvanced;
