import React from 'react';
import Banner from './Pages/Banner/Banner';
import Navbar from './Pages/Header/Navbar';





const Home = () => {
    return (
        <div class='container'>
          <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;