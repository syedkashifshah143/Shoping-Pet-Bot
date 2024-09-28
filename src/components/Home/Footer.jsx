import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-4 border-white border">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold mb-2"> Pet Company</h2>
          <p className="text-lg">Your tagline or brief description goes here.</p>
        </div>
        <div className="flex justify-center mb-6 ">
          <Link className="mx-2 text-2xl"><FaFacebook /></Link>
          <Link className="mx-2 text-2xl"><FaTwitter /></Link>
          <Link className="mx-2 text-2xl"><FaLinkedin /></Link>
          <Link className="mx-2 text-2xl"><FaInstagram /></Link>
        </div>
        <div className="text-center text-sm">
          <p>&copy; 2024 Pet Company All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
