import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { count, increaseBy } = useCounter({});

  return (
    <>
      <h3>
        Contador con Hook: <small>{count}</small>
      </h3>
      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  );
};
