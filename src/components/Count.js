import React from "react";

function Count() {
  const [count, setCount] = React.useState(0);

  const clickBtn = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={clickBtn}>Click</button>
    </>
  );
}

export default Count;
