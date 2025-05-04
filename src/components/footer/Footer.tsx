import React from 'react';
import { BiBookOpen } from 'react-icons/bi';
import { FaInstagram, FaLinkedin, FaMapPin, FaYoutube } from 'react-icons/fa';
import { FaFacebook, FaPhone, FaTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BiBookOpen className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">TechMonks</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of tech professionals with cutting-edge courses and expert mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition duration-300">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition duration-300">Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Course Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Mobile Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Data Science</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Machine Learning</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Cloud Computing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapPin className="h-5 w-5 text-indigo-400 mt-0.5" />
                <span className="text-gray-400">123 Tech Street, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">info@techmonks.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechMonks. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;