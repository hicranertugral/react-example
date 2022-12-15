import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  // useEffect(() =>)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + amount)}>Arttır</button>
      {/* <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count - 1)}>azalt</button> */}
      <hr />
      <div>Arttırma: +{amount}</div>
      <button onClick={() => setAmount(3)}>+3</button>
      <button onClick={() => setAmount(5)}>+5</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </div>
  );
}

export default Counter;
