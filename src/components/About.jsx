// src/components/About.jsx

import React from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
// Importa los íconos de tecnología
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaNodeJs } from 'react-icons/fa';
import { DiMysql, DiJava } from 'react-icons/di';
import { SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si';
import profilePic from '../assets/profile.jpg'; // 🛑 RUTA CORREGIDA: Salta de components a src, luego entra a assets.

// Definición de las tecnologías (sin cambios)
const SKILLS_DATA = {
    backend: [
        { name: 'PHP', Icon: FaPhp, color: '#777BB4' },
        { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
        { name: 'Java', Icon: DiJava, color: '#007396' },
    ],
    frontend: [
        { name: 'React', Icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
    ],
    database: [
        { name: 'MySQL', Icon: DiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    ],
};

function About (){
    return (
        <section id="about" className="py-20 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-title text-center mb-12 animate-fade-in-up">
                    Sobre <span className="bg-primary
              
              text-transparent 
              bg-clip-text 
             
              
              ">mí</span>
                </h2>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
                    
                    {/* A. TEXTO PRINCIPAL */}
                    <div className="lg:w-3/5 space-y-6 animate-fade-in-up">
                        <div className="space-y-2">
                            <h1 className=" font-bold">
                                Estudiante de Ingeniería de Software
                            </h1>
                            <p className="caption text-text italic">
                                Apasionada por crear soluciones web eficientes y atractivas.
                            </p>
                        </div>
                        <p className="leading-relaxed">
                            Me especializo en la construcción de aplicaciones web completas, 
                            desde la interfaz de usuario
                            hasta la lógica del servidor y 
                            la gestión de datos con bases de datos SQL y NoSQL.
                        </p>
                    </div>

                    {/* B. IMAGEN DE PERFIL */}
                    <div className="lg:w-2/5 flex justify-center lg:justify-end animate-fade-in delay-300 w-full">
                        <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full shadow-2xl border-2 border-accent">
                            <img 
                                src={profilePic} 
                                alt="Foto de Perfil" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full pt-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
                        
                        {/* Bloques de Habilidades */}
                        <SkillBlock title="Backend" skills={SKILLS_DATA.backend} />
                        <SkillBlock title="Frontend" skills={SKILLS_DATA.frontend} />
                        <SkillBlock title="Database" skills={SKILLS_DATA.database} />
                        
                    </div>

                    {/* Botones de Acción Centrados */}
                    <div className="flex justify-center space-x-4 pt-4">
                        <AboutButton primary={true} href="/about">
                            <FaArrowRight className="mr-2" /> Saber Más
                        </AboutButton>
                        <AboutButton primary={false} href="/downloads/tu_cv.pdf"> 
                            <FaDownload className="mr-2" /> Descargar CV
                        </AboutButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Componentes Auxiliares (sin cambios) ---

const SkillBlock = ({ title, skills }) => (
    <div className="p-4 bg-secondary/30 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-2 border-accent">
        <h4 className="text-xl font-semibold text-accent mb-4">{title}</h4>
        <div className="flex flex-col space-y-2">
            {skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-start text-text">
                    <skill.Icon style={{ color: skill.color }} className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-left">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const AboutButton = ({ children, primary, href }) => (
    <a 
        href={href} 
        className={`flex items-center px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md 
            ${primary 
                ? 'bg-accent text-background hover:bg-primary hover:text-white' 
                : 'bg-background text-primary border-2 border-primary hover:bg-primary hover:text-text'
            }`}
        target={href.includes('pdf') ? '_blank' : '_self'}
        rel={href.includes('pdf') ? 'noopener noreferrer' : ''}
    >
        {children}
    </a>
);


export default About;