import React from "react";

function SortedEmployees() {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  const sorted = [...employees].sort((a, b) =>
    a.department.localeCompare(b.department) ||
    a.name.localeCompare(b.name)
  );

  return (
    <ul>
      {sorted.map((e, index) => (
        <li key={index}>
          {e.name} - {e.department}
        </li>
      ))}
    </ul>
  );
}

export default SortedEmployees;
