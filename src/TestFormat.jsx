import React, { useState } from 'react';

export const TestFormat = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log('clicked', count);
  }

  return (
    <div style={{ padding: 10 }}>
      <h2> Test Format </h2>
      <button onClick={handleClick}>Click me</button>
      <p> Count: {count} </p>
    </div>
  );
};
