import React from "react";

function ITEmployees() {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  const itEmployees = employees.filter(e => e.department === "IT");

  return (
    <ul>
      {itEmployees.map((e, index) => (
        <li key={index}>{e.name}</li>
      ))}
    </ul>
  );
}

export default ITEmployees;
