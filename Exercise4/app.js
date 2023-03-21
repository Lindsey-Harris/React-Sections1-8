import React from 'react';
import Product from './Product';
import './styles.css';

//have to make sure to import the pages that you want app.js to read.

// don't change the Component name "App"
export default function App() {
   //product component lists the properties title, price and description.
   //it will show on the react page when you use npm start
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product title = "Product 1" price= "10" description="First product" />
              <Product title = "Product 2" price= "20" description="Second product" />
        </div>
    );
}

//You're working on the UI prototype for an online shop and your task is to output two product items 
//(via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in 
//the App component.
//The two product items should use the same component (<Product />) but output different data (title, price & 
//description). Data should be passed to the components (and output there) via props.