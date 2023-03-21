import React from 'react';

import './styles.css';
// don't change the Component name "App"

//make sure to declare your variable and create an arrow function that 
//console logs "Stored!". 
export default function App() {
    const clickHandler = () => {
        console.log('Stored!');
    }
    return <button onClick={clickHandler}>Bookmark</button>;
}
//used the onClick handler so when the button is clicked in the app itll perform an action.
//make sure to call the variable name in the return section to execute.

//imagine you're working on a brand-new React app that should allow users to bookmark articles 
//(e.g., news articles).

//To start with your work, your task is to "connect" a click event listener to an already existing 
//button and output "Stored!" via console.log(). And, of course, you should do that "the React way".

