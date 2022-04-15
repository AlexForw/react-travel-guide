import { useEffect, useState } from 'react';


const App = () => {
  const [counter, setCounter] = useState(0)

  const subtr = () => setCounter(counter - 1)
  
  const dupl = (arr) => [...arr, ...arr]
console.log(dupl([1,2,3,4,5]))
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={subtr}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
