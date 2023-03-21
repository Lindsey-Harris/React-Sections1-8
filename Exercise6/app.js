// import React from 'react';

import './styles.css';

import React, {useState} from 'react';
//

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    const [price, setPrice]
    = useState(100); //100 is the default price
    //useState is a react hook and the hook returns an array
    //with exactly two elements:
    //current state value and a function that should be called
    //to update the state value.
    function clickHandler () {
        setPrice(75); //have to make sure to call the state updating function inside of the clickHandler and set the price to 75 when the button is clicked.
    }
    //creating a function named clickHandler
    return (
        <div>
            <p>${price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}
//using the onClick handler inside the button element and 
//have to call the name of the function in the return which
//is clickHandler.