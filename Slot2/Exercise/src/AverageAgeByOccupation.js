// AverageAgeByOccupation.js
import React from "react";

const people = [
  { id: 1, name: "Alice", age: 28, occupation: "Developer" },
  { id: 2, name: "Bob", age: 22, occupation: "Designer" },
  { id: 3, name: "Charlie", age: 25, occupation: "Developer" },
  { id: 4, name: "David", age: 30, occupation: "Manager" },
  { id: 5, name: "Eve", age: 26, occupation: "Designer" }
];

function groupByOccupation(people) {
  return people.reduce((acc, person) => {
    if (!acc[person.occupation]) acc[person.occupation] = [];
    acc[person.occupation].push(person);
    return acc;
  }, {});
}

function calculateAverageAge(group) {
  const total = group.reduce((sum, p) => sum + p.age, 0);
  return (total / group.length).toFixed(2);
}

function AverageAgeByOccupation() {
  const grouped = groupByOccupation(people);

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.entries(grouped).map(([occupation, group]) => (
          <li key={occupation}>
            {occupation}: {calculateAverageAge(group)} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
