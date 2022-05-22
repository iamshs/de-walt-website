import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Reviews from './Reviews';
import Specialty from './Specialty';
import Summary from './Summary';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
           <Banner />
           <Specialty />
           <Summary />
           <Tools />
           <Reviews />
           <Contact />
           
        </div>
    );
};

export default Home;