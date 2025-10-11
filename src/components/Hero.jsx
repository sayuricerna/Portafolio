// src/components/Hero.jsx

import React from 'react';
// Íconos de Redes Sociales (Font Awesome)
import { FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa'; 
// Íconos de Tecnologías (Font Awesome, DevIcons, SimpleIcons)
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaNodeJs } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di'; // MySQL
import { SiTailwindcss, SiPostgresql } from 'react-icons/si'; // Tailwind, PostgreSQL

// 💡 Lista de tecnologías (Icono y Color de Logo Original)
const TECH_ICONS_LIST = [
  // Icono, Color de Logo, Posición Estática
  { Icon: FaReact, color: '#61DAFB', position: { top: '5%', left: '10%' }, delay: 'delay-100', sizeClass: 'w-14 h-14', opacityClass: 'opacity-100' }, // Cerca
  { Icon: FaJs, color: '#F7DF1E', position: { top: '15%', right: '5%' }, delay: 'delay-300', sizeClass: 'w-10 h-10', opacityClass: 'opacity-75' }, // Medio
  { Icon: FaPhp, color: '#777BB4', position: { bottom: '5%', right: '15%' }, delay: 'delay-500', sizeClass: 'w-8 h-8', opacityClass: 'opacity-50' }, // Lejos
  { Icon: FaHtml5, color: '#E34F26', position: { top: '40%', left: '30%' }, delay: 'delay-200', sizeClass: 'w-12 h-12', opacityClass: 'opacity-90' }, // Casi Cerca
  { Icon: FaCss3Alt, color: '#1572B6', position: { bottom: '30%', left: '5%' }, delay: 'delay-400', sizeClass: 'w-8 h-8', opacityClass: 'opacity-60' }, // Lejos
  { Icon: DiMysql, color: '#4479A1', position: { top: '55%', right: '40%' }, delay: 'delay-600', sizeClass: 'w-14 h-14', opacityClass: 'opacity-100' }, // Cerca
  { Icon: FaNodeJs, color: '#339933', position: { bottom: '10%', left: '45%' }, delay: 'delay-100', sizeClass: 'w-10 h-10', opacityClass: 'opacity-80' }, // Medio
  { Icon: SiTailwindcss, color: '#06B6D4', position: { top: '25%', right: '30%' }, delay: 'delay-300', sizeClass: 'w-12 h-12', opacityClass: 'opacity-90' }, // Casi Cerca
  { Icon: FaJava, color: '#007396', position: { bottom: '45%', right: '5%' }, delay: 'delay-500', sizeClass: 'w-8 h-8', opacityClass: 'opacity-50' }, // Lejos
];


function Hero() {
  return (
    <section className="relative bg-background min-h-[90vh] flex flex-col justify-center items-center p-6 md:p-12 overflow-hidden">
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
          
          <h1 className="text-title md:text-5xl lg:text-7xl font-extrabold mb-4 animate-fade-in-up">
            FullStack 
            <span className="
              bg-gradient-to-r 
              from-primary 
              to-accent 
              text-transparent 
              bg-clip-text 
              transition 
              duration-300 
              hover:scale-105 
              hover:text-accent 
              inline-block
            ">
              Dev.
            </span>
          </h1>
          
          <h2 className="text-subtitle text-text mb-8">
            Desarrolladora Web | Frontend & Backend
          </h2>
          
          <div className="flex space-x-4 lg:space-x-6 animate-fade-in delay-300">
            <HeroButton Icon={FaLinkedinIn} href="[TU_LINK_LINKEDIN]" />
            <HeroButton Icon={FaGithub} href="[TU_LINK_GITHUB]" />
            <HeroButton Icon={FaYoutube} href="[TU_LINK_YOUTUBE]" />
            <HeroButton Icon={FaEnvelope} href="mailto:tuemail@dominio.com" />
          </div>
        </div>

        <div className="relative w-full h-80 lg:w-1/2 flex items-center justify-center">
            
            <div className="absolute inset-0 
                          bg-secondary
                          filter blur-[800px]
                          transform scale-105
                           z-0 blob"> 
            </div>
            
            <div className="absolute inset-0 
                          transform translate-x-5 translate-y-15 scale-125
                          bg-primary
                          filter blur-[800px] 
                           z-0 blob">
            </div>
            <div className="absolute inset-0 z-10"> 
              {TECH_ICONS_LIST.map((tech, index) => (
                
                <FloatingTechIcon 
                  key={index} 
                  Icon={tech.Icon} 
                  color={tech.color} 
                  sizeClass={tech.sizeClass}
                  opacityClass={tech.opacityClass} // 👈 PASAMOS LA OPACIDAD

                  style={{
                    ...tech.position, // Usamos la posición ESTÁTICA definida en el array
                    animationDelay: tech.delay, 
                  }}
                />
                
              ))}
            </div>
            
        </div>
      </div>

    </section>
  );
}

const HeroButton = ({ Icon, href }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-primary hover:bg-accent text-white p-3 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
      aria-label={`Enlace a ${Icon.name}`}
    >
      <Icon className="text-xl" />
    </a>
);

const FloatingTechIcon = ({ Icon, color, style, sizeClass, opacityClass }) => (
    <div 
        className={`absolute animate-float transition duration-500 hover:animate-bounce ${opacityClass}`} 
        style={style}
    >
  
        {/* <div  className="relative flex items-center justify-center rounded-full bg-inherit shadow-lg backdrop-blur-sm w-16 h-16 hover:scale-110 transition duration-700"> */}
        <Icon 
            style={{ color: color }} 
            className={sizeClass} 
        />
        {/* </div> */}
    </div>
);

export default Hero;