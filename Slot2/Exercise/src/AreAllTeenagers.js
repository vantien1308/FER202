// AreAllTeenagers.js
import React from "react";

const people = [
  { id: 1, name: "Alice", age: 15 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 18 }
];

function AreAllTeenagers() {
  const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Are All Teenagers?</h2>
      <p>{allTeenagers ? "✅ Yes, all are teenagers." : "❌ No, not all are teenagers."}</p>
    </div>
  );
}

export default AreAllTeenagers;
