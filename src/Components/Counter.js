

import { useContext } from "react";
import { CounterContext } from "../Components/CounterContext";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
















// import React, { useContext } from "react";
// import CounterProvider, { CounterContext } from "./CounterContext";

// import { useContext } from "react";

// const CounterComponent = () => {
//   const { count, increment, decrement, reset } = useContext(CounterContext);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// function App() {
//   return (
//     <CounterProvider>
//       <CounterComponent />
//     </CounterProvider>
//   );
// }

// export default App;



