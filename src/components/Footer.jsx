import React from 'react';
import { FaLinkedinIn, FaGithub, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
function Footer() {
  return (
    <footer className=" text-text p-8 mt-auto border-t border-gray-600">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-center mb-2">
          <h2 className="text-title font-bold text-text">Sayuri Cerna</h2>
          <p className="text-sm text-gray-400 flex items-center justify-center space-x-1">
            <FaPhoneAlt className="text-accent" />
            <span>+593 999 9999</span>
          </p>
        </div>
        <div className="flex space-x-6 text-2xl text-gray-300">
          <a 
            href="[TU_LINK_LINKEDIN]" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="[TU_LINK_GITHUB]" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:tuemail@dominio.com" 
            className="hover:text-accent transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a 
            href="[TU_LINK_YOUTUBE]" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition duration-300"
          >
            <FaYoutube />
          </a>
        </div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest pt-2">
          Quito, Ecuador
        </p>
        <p className="text-caption text-gray-600 pt-4 border-t border-gray-700 w-full text-center">
          Hecho por Sayuri Cerna &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;