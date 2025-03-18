import { createContext, useContext, useState } from "react";

// 1 Create Context
const CounterContext = createContext();

// 2 Create the Component
function Counter({ children }) {
  const [count, setCount] = useState(0);

  const decrease = () => setCount((c) => c - 1);

  const increase = () => setCount((c) => c + 1);

  return (
    <CounterContext.Provider
      value={{
        count,
        increase,
        decrease,
      }}
    >
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3 Create Child Component that would implement the Compound Component

function Count() {
  const { count } = useContext(CounterContext);

  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);

  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);

  return <button onClick={decrease}>{icon}</button>;
}

// 4 Add Child component as properties to the parent component

Counter.Count = Count;

Counter.Label = Label;

Counter.Increase = Increase;

Counter.Decrease = Decrease;

export default Counter;
