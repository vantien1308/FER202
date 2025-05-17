import React from "react";

const people = [
    { id: 1, name: "Alice", age: 28, occupation: "Developer" },
  { id: 2, name: "Bob", age: 22, occupation: "Designer" },
  { id: 3, name: "Charlie", age: 25, occupation: "Developer" },
  { id: 4, name: "David", age: 30, occupation: "Manager" },
  { id: 5, name: "Eve", age: 26, occupation: "Designer" }
]

function sortPeople(people) {
    return [...people].sort((a, b) => {
        if (a.occupation < b.occupation) return -1;
        if (a.occupation > b.occupation) return 1;
        return a.age - b.age;
    });
}

function SortedPeople()  {
    const sorted = sortPeople(people);
    return (
        <div style={{ padding: "1rem"}}>
        <h2>Sorted People</h2>
        <ul>
            { sorted.map(person  => (
                <li key={person.id}>
                    {person.name} - {person.age} - {person.occupation}
                </li>
            ))}
        </ul>
        </div>
    )
}
export default SortedPeople;