// create a auto incremental/decremental counter using redux,
//  and counter should auto increase max to 10 and decrease min to 0 (partially correct)

import React, { useEffect, useReducer } from "react";

function CountTimer() {
  function reducer(state: any, action: any) {
    switch (action) {
      case "inc":
        return state + 1;

      case "dec":
        return state - 1;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);


  function incrementHandler() {
    const intervalId =setInterval(() => dispatch("inc"), 1000);
  }

  return (
    <div>
      <button onClick={incrementHandler}>+</button>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>-</button>
    </div>
  );
}

export default CountTimer;
