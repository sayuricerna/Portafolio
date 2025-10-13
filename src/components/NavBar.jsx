// src/components/NavBar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Iconos de hamburguesa y cierre

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 💡 Lógica para el menú móvil

  const links = [
    { to: "/", label: "Home" },
    { to: "#about", label: "Acerca de mí" },
    { to: "#projects", label: "Proyectos" },
    { to: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-background z-30 p-5 sticky top-0 shadow-xl">
      <div className=" mx-auto flex justify-between items-center">
        
        <Link to="/" className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text text-subtitle font-bold hover:text-text transition duration-300 z-50">
          Sayuri Cerna
        </Link>
        
        <div className="hidden md:flex justify-center space-x-8">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} label={link.label} />
          ))}
          
          {/* <a 
            href="/cv/sayuri-cerna-cv.pdf" 
            download 
            className="bg-accent text-white hover:bg-primary px-3 py-2 rounded-md text-md font-medium transition duration-300 transform hover:scale-105 ml-8"
          >
            Descargar CV
          </a> */}
        </div>
        
        <button 
            className="text-primary hover:text-accent focus:outline-none md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>

      </div>
      <div className={`fixed inset-0 bg-secondary/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-40 
                       ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
         
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
              {links.map(link => (
                  
                  <NavLinkMobile 
                    key={link.to} 
                    to={link.to} 
                    label={link.label} 
                    onClick={() => setIsMenuOpen(false)} 
                  />
              ))}
              {/* <a 
                href="/cv/sayuri-cerna-cv.pdf" 
                download 
                className="bg-accent text-white hover:bg-primary px-6 py-3 rounded-md text-lg font-bold transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Descargar CV
              </a> */}
          </div>
      </div>
    </nav>
  );
}

// const NavLink2 = ({ to, label }) => (
//     <Link 
//         to={to} 
//         className="text-text hover:bg-primary/30 hover:text-primary px-3 py-2 rounded-md text-md font-medium transition duration-300"
//     >
//         {label}
//     </Link>
// );

const NavLink = ({ to, label }) => {
    const isHashLink = to.startsWith('#');
    const classes = "text-text hover:bg-primary/30 hover:text-primary px-3 py-2 rounded-md text-md font-medium transition duration-300";
    if (isHashLink) {
        return (
            <a 
                href={to} 
                className={classes}
            >
                {label}
            </a>
        );
    }
    return (
        <Link 
            to={to}
            className={classes}
        >
            {label}
        </Link>
    );
};
            

// const NavLinkMobile2 = ({ to, label, onClick }) => (
//     <Link 
//         to={to} 
//         onClick={onClick}
//         className="text-primary text-3xl font-extrabold hover:text-accent transition duration-300"
//     >
//         {label}
//     </Link>
// );

const NavLinkMobile = ({ to, label, onClick }) => {
    const isAnchor = to.startsWith('#');
    const classes = "text-primary text-3xl font-extrabold hover:text-accent transition duration-300";

    if (isAnchor) {
        return (
            <a 
                href={to} 
                onClick={onClick}
                className={classes}
            >
                {label}
            </a>
        );
    }

    return (
        <Link 
            to={to} 
            onClick={onClick}
            className={classes}
        >
            {label}
        </Link>
    );
};     
export default NavBar;