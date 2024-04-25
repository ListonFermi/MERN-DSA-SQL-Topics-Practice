import React from "react";

function LazyComponent() {
  const a = [
    1, 2, 3, 4, 5, 6, 78, 8, 9, 9, 5, 5, 2, 2, 5, 6, 5, 54, 5, 6, 6, 5, 5, 5, 5,
  ];
  return (
    <div>
      <ul>
        {a.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

export default LazyComponent;
