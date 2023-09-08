import { useState } from 'react'


// lager funksjonen for counter
function Counter() {
  // setter counter til og være 0
    const [count, setCount] = useState(0);
  
    // for og få knappen til og få det til og øke med 1
    const increaseCount = () => {
        setCount(count + 1);
    }

    // for og sette count tilbake til 0
    const resetCount = () => {
        setCount(0)

    }
    return (
      <div>
        <h1>Counter</h1>
        {/* her vise count */}
        <h1>{count}</h1>
        {/* knappen med onclick for og øke count */}
        <button onClick={increaseCount}>Øk</button>
        {/* knappen med onclick for og tilbakestille count */}
        <button onClick={resetCount }>Tilbakestill</button>
      </div>
    );
  }
  
  export default Counter;
  