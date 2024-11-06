import React from 'react';

import homeImage from '../images/home-image.jpg';

const Home = () => {
    return (
        <div className="page home">
               <h1>Welcome to Our Website</h1>

               <h2>Muhammad Soban
                <br/>
                <br/> <span><i>Web Developer<br/>Graphic Desginer<br/>Video Editor</i></span></h2>
           <img src={homeImage} alt='homeimage' width={200} height={200}></img>
           
        </div>
    );
};

export default Home;