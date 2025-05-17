// OldestYoungest.js
import React from "react";

const people = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "David", age: 30 },
  { id: 5, name: "Eve", age: 26 }
];

function findOldestAndYoungest(people) {
  const sorted = [...people].sort((a, b) => a.age - b.age);
  return {
    youngest: sorted[0],
    oldest: sorted[sorted.length - 1]
  };
}

function OldestYoungest() {
  const { youngest, oldest } = findOldestAndYoungest(people);

  return (
    <div>
      <h2>Oldest and Youngest</h2>
      <p>👶 Youngest: {youngest.name} ({youngest.age})</p>
      <p>🧓 Oldest: {oldest.name} ({oldest.age})</p>
    </div>
  );
}

export default OldestYoungest;
