import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [messageValidity, setMessageValidity] =
    React.useState('Invalid');
    
    //inside of messageChangeHandler, the messageValidity state must be set
    // to "Invalid" (if the user input is less than 3 characters long) or 
    //"Valid" (if longer than 3 characters).
    function 
    messageChangeHandler(event) {
        const value = event.target.value;
            if (value.trim().length < 3) {
                setMessageValidity('Invalid')
            } else {
                setMessageValidity('Valid');
            }
        
    }
    //In order to update the state upon user input (in the <input> element), add 
    //the onChange prop to the <input> element:
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} message</p>
        </form>
    );
}
//info message at the bottom of the form must be updated to dynamically 
//reflect the messageValidity state value: