import React from 'react';

export default function Product(props) {
//have to make sure to put the properties(props) as a parameter to use in the JSX
    
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <h3>{props.description}</h3>
        </article>
    );
}

//make sure to use className instead of class like you use in html pages.
//using props.title,props.price and props.description makes sure that in app.js each property can be used.