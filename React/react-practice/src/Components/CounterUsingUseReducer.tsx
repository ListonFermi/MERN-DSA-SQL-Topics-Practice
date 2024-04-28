import React, { useReducer } from "react";

function CounterUsingUseReducer() {
  function reducer(state: any, action: any) {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={()=>dispatch('inc')}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>dispatch('dec')}>-</button>
    </div>
  );
}

export default CounterUsingUseReducer;
