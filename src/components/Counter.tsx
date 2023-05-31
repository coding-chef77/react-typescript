type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    count: number;
  };
  
  const Counter = ({ setCount, count }: CounterProps) => {
    return (
      <>
        <h1>Count is {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
      </>
    )
  }
  
  export default Counter;
  