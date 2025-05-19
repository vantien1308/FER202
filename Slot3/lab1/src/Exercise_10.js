import React, { useState } from "react";

function SearchEmployee() {
  const [query, setQuery] = useState("");
  const employees = [
    { name: "Anna" },
    { name: "Brian" },
    { name: "Clara" },
    { name: "Ann" },
    { name: "Elisabeth" }
  ];

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search name..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((e, i) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchEmployee;
