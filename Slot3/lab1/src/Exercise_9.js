import React from "react";

function HasTeenager() {
  const employees = [
    { age: 50 },
    { age: 40 },
    { age: 19 },
    { age: 22 },
    { age: 16 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return <p>Any teenager? {isTeenager ? "Yes" : "No"}</p>;
}

export default HasTeenager;
