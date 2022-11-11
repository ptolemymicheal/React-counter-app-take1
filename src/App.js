
import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const reset = 0



  return (
    
      <div className="App">
        <div className='display'>Count: {count}</div>
        <div>
          <input type='number' className='inputValue' placeholder='input a number here' value={count} onChange={(e) => setCount(e.target.value)} /> 
        </div>
        <div><button className='buttons' id='plus' onClick={() => setCount(count ++)}>Increment</button></div>
        <div><button className='buttons' id='minus' onClick={() => setCount(count --)}>Decrement</button></div>
        <div><button className='buttons' id='reset' onClick={() => setCount(reset)}>Reset</button></div>
       
      </div>
    

   
  );
}

export default App;
