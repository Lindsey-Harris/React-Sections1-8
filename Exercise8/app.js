import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [counter, setCounter]
    = React.useState(0);
    //registering a new state via React.useState()
    
    function incrementCounterHandler() {
        setCounter(prevCounter => prevCounter + 1);
        //using pass a function to the state updating function (setCounter())
        // This function automatically receives the previous value and should return
        //the new value.
    }
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={incrementCounterHandler}>Increment</button>
        //adding the onClick prop to recieve the function as a value
      </div>
    );
}
