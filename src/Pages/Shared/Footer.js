import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-black'>
      <div className="footer p-10  text-neutral-content">
      <div>
          <span className="footer-title">Services</span> 
          <Link to={'/'} className="link link-hover">Branding</Link>
          <Link to={'/'} className="link link-hover">Design</Link>
          <Link to={'/'} className="link link-hover">Marketing</Link>
          <Link to={'/'} className="link link-hover">Advertisement</Link>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link to={'/'} className="link link-hover">About us</Link>
          <Link to={'/'} className="link link-hover">Contact</Link>
          <Link to={'/'} className="link link-hover">Jobs</Link>
          <Link to={'/'} className="link link-hover">Press kit</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link to={'/'} className="link link-hover">Terms of use</Link>
          <Link to={'/'} className="link link-hover">Privacy policy</Link>
          <Link to={'/'} className="link link-hover">Cookie policy</Link>
        </div>
      </div>
        <p className='text-center text-white'> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {year} <span className=' font-bold text-secondary'>DeWalt</span></p>
      </footer>
    );
};

export default Footer;