import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tool')
    .then(res=>res.json())
    .then(data=>{
        
        setTools(data)
    })
    },[])
    return (
        <div>
          <h1 className='text-4xl font-bold my-10 text-center'>Tools we Provide</h1>
          <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {
              tools.map(tool=><Tool key={tool._id} tool={tool} ></Tool> )
          }    
          </div>  
        </div>
    );
};

export default Tools;