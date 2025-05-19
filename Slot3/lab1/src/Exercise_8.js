import React from "react";

function GroupedByDepartment() {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  const groups = employees.reduce((acc, curr) => {
    acc[curr.department] = acc[curr.department] || [];
    acc[curr.department].push(curr.name);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groups).map(([dept, names]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {names.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedByDepartment;
