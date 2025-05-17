// GroupByOccupation.js
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

function GroupByOccupation() {
  const grouped = groupByOccupation(people);

  return (
    <div>
      <h2>Group by Occupation</h2>
      {Object.entries(grouped).map(([occupation, group]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {group.map(person => (
              <li key={person.id}>{person.name} - {person.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
