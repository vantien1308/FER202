import React from "react";

const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 15 },
    { id: 4, name: "David", age: 30 }
];

function FirstTeenager()    {
    const teenager = people.find(person => person.age >= 13 && person.age <= 19);

    return (
         <div style={{ padding: "1rem" }}>
      <h2>First Teenager</h2>
      {teenager ? (
        <div>
          <p><strong>Name:</strong> {teenager.name}</p>
          <p><strong>Age:</strong> {teenager.age}</p>
        </div>
      ) : (
        <p>No teenager found in the list.</p>
      )}
    </div>
  );
}

export default FirstTeenager;