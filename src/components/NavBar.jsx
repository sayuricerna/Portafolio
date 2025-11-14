import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "Acerca de mí" },
    { to: "/#projects", label: "Proyectos" },
    { to: "/#contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-background z-30 p-5 sticky top-0 shadow-xl">
      <div className=" mx-auto flex justify-between items-center">
        
        <a href="/" className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text text-subtitle font-bold hover:text-text transition duration-300 z-50">
          Sayuri Cerna
        </a>
        
        <div className="hidden md:flex justify-center space-x-8">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} label={link.label} />
          ))}    
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
          </div>
      </div>
    </nav>
  );
}

// const NavLink = ({ to, label }) => {
//     const isHashLink = to.startsWith('#');
//     const classes = "text-text hover:bg-primary/30 hover:text-primary px-3 py-2 rounded-md text-md font-medium transition duration-300";
//     if (isHashLink) {
//         return (
//             <a 
//                 href={to} 
//                 className={classes}
//             >
//                 {label}
//             </a>
//         );
//     }
//     return (
//         <HashLink
//             to={to}
//             className={classes}
//         >
//             {label}
//         </HashLink>
//     );
// };

// const NavLinkMobile = ({ to, label, onClick }) => {
//     const isAnchor = to.startsWith('#');
//     const classes = "text-primary text-3xl font-extrabold hover:text-accent transition duration-300";

//     if (isAnchor) {
//         return (
//             <a 
//                 href={to} 
//                 onClick={onClick}
//                 className={classes}
//             >
//                 {label}
//             </a>
//         );
//     }

//     return (
//         <HashLink 
//             to={to} 
//             onClick={onClick}
//             className={classes}
//         >
//             {label}
//         </HashLink>
//     );
// };     
const NavLink = ({ to, label }) => {
    // Si el destino es la raíz "/" o un hash interno
    const isSpecialLink = to === "/" || to.startsWith('#'); 
    
    const classes = "text-text hover:bg-primary/30 hover:text-primary px-3 py-2 rounded-md text-md font-medium transition duration-300";
    
    // 💡 CAMBIO CLAVE: Usar <a> para "/" (Home) y para hashes directos (como '/#contacto')
    if (isSpecialLink) {
        return (
            // Usamos <a> para forzar la recarga del navegador
            <a 
                href={to} 
                className={classes}
            >
                {label}
            </a>
        );
    }
    
    // Para cualquier otra ruta que deba ser manejada por React Router
    return (
        <HashLink
            to={to}
            className={classes}
        >
            {label}
        </HashLink>
    );
};
const NavLinkMobile = ({ to, label, onClick }) => {
    // Si el destino es la raíz "/" o un hash interno
    const isSpecialLink = to === "/" || to.startsWith('#'); 
    
    const classes = "text-primary text-3xl font-extrabold hover:text-accent transition duration-300";

    // 💡 CAMBIO CLAVE: Usar <a> para "/" (Home) y para hashes directos
    if (isSpecialLink) {
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

    // Para cualquier otra ruta
    return (
        <HashLink 
            to={to} 
            onClick={onClick}
            className={classes}
        >
            {label}
        </HashLink>
    );
};
export default NavBar;