import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Reviews from './Reviews';
import Specialty from './Specialty';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
           <Banner />
           <Specialty />
           <Tools />
           <Reviews />
           <Contact />
           
        </div>
    );
};

export default Home;