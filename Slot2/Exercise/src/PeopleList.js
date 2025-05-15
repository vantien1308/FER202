// PeopleList.js
import React from "react";

const people = [
  { id: 1, name: "Alice", age: 25, occupation: "Designer" },
  { id: 2, name: "Bob", age: 30, occupation: "Developer" },
  { id: 3, name: "Charlie", age: 28, occupation: "Product Manager" }
];

function PeopleList() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>List of People</h2>
      {people.map(person => (
        <div key={person.id} style={{
          border: "1px solid #ccc",
          padding: "0.75rem",
          marginBottom: "0.5rem",
          borderRadius: "8px"
        }}>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Occupation:</strong> {person.occupation}</p>
        </div>
      ))}
    </div>
  );
}

export default PeopleList;
