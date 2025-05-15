// PeopleTable.js
import React from "react";

const people = [
  { id: 1, name: "Alice", age: 25, occupation: "Designer" },
  { id: 2, name: "Bob", age: 30, occupation: "Developer" },
  { id: 3, name: "Charlie", age: 28, occupation: "Product Manager" }
];

function PeopleTable() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>People Table</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Age</th>
            <th style={cellStyle}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td style={cellStyle}>{person.name}</td>
              <td style={cellStyle}>{person.age}</td>
              <td style={cellStyle}>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left"
};

export default PeopleTable;
