import React from 'react';
import profile from '../../assets/Profile.jpg'

const Portfolio = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
            <img className='w-2/4' src={profile} alt="Md Sholayman" />

            </figure>
        <div className="card-body">
          <h2 className="card-title font-2xl font-bold text-primary"> Name: Md Sholayman </h2>
          <p> Email: <span className='text-xl font-extrabold'>mdsholayman998@gmail.com</span> </p>
          <p>Educational Background: <span className='text-xl font-bold'>National University, Department Of Chemistry</span></p>
          <h2 className='text-xl font-bold'>Skill: As a developer i know <span> HTML, Java Script, React </span></h2>
          <div>
              <h2 className='text-2xl text-primary font-extrabold'>Links Of My Web sites:</h2>
              <p className='text-2xl font-extrabold'>
                  1. https://warhouse-management.web.app/
              </p>
               <p className='text-2xl font-extrabold'> 
                2. https://classy-cobbler-36ef30.netlify.app/
                </p>
                <p className='text-2xl font-extrabold'> 
                     3.https://visionary-cascaron-909512.netlify.app/
                </p>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;