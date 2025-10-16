import React from 'react';
import { FaEnvelope, FaGithub, FaGlobe, FaGraduationCap, FaCertificate, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { FaArrowLeft } from "react-icons/fa";
function AboutPage() {
    const CONTACT_INFO = {
        name: "SAYURI CERNA",
        email: "cernasayuri@gmail.com",
        github: "sayuricerna",
        languages: "Español (Nativo), Inglés (B2), Ruso (B1)",
        linkedin: "sayuricerna",
    };

    return (
        <div className="bg-background min-h-screen py-16 px-6">
            <Link to="/"
            className="px-80 inline-flex items-center text-primary hover:text-text transition duration-300"
            >
                <FaArrowLeft className="mr-2" /> Volver
            </Link>
            <div className="container mx-auto max-w-4xl shadow-2xl rounded-lg p-8 md:p-12 lg:p-16">
                <header className="pb-6 mb-6">
                    <h1 className=" font-extrabold  mb-2 tracking-wide">
                        {CONTACT_INFO.name}
                    </h1>
                    <div className="flex flex-wrap text-text mt-3 gap-y-1 gap-x-6">
                        <ContactItem icon={FaEnvelope} text={CONTACT_INFO.email} href={`mailto:${CONTACT_INFO.email}`} />
                        <ContactItem icon={FaGithub} text="Github" href={`https://github.com/${CONTACT_INFO.github}`} />
                        <ContactItem icon={FaLinkedin} text="LinkedIn" href={`https://www.linkedin.com/in/${CONTACT_INFO.github}/`} />
                    </div>
                    <p className=" text-text mt-3">
                        <span className="font-semibold text-primary">Idiomas:</span> {CONTACT_INFO.languages}
                    </p>
                </header>


                <Section title="Formación Académica" icon={FaGraduationCap}>
                    <EducationItem 
                        institution="UNIVERSIDAD UNIANDES" 
                        degree="Estudiante de Ingeniería de Software" 
                        duration="Mayo 2023 – Graduación prevista en 2027" 
                        details="Universidad Autónoma de Los Andes (Uniandes)."
                    />
                    <EducationItem 
                        institution="ORACLE NEXT EDUCATION - CERTIFICADO" 
                        degree="Certificación en Desarrollo Frontend" 
                        duration="Diciembre 2022 – Mayo 2023" 
                        details="Programa de educación y empleabilidad enfocado en capacitar personas en tecnología y conectarlas con el mercado."
                    />
                </Section>
                
                <Section title="Habilidades" icon={FaGlobe}>
                    <SkillBlock title="Lenguajes de Programación" items={["HTML", "CSS", "JavaScript", "React", "Python", "C# (.NET)", "Java"]} />
                    <SkillBlock title="Bases de Datos" items={["SQL Server", "MySQL Workbench", "Diseño de bases de datos simples, vistas, procedimientos almacenados, triggers y funciones."]} />
                    <SkillBlock title="Frameworks y Herramientas" items={[".NET (Windows Forms, MVC)", "Visual Studio Community", "VS Code", "Microsoft Office (Word, Excel, PowerPoint)"]} />
                </Section>

                <Section title="Habilidades Blandas y Competencias" icon={FaCertificate}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-text">
                        {[
                            "Trabajo en equipo", "Liderazgo", "Ética laboral", "Iniciativa", 
                            "Resolución de problemas", "Empatía y paciencia", "Gestión del tiempo", 
                            "Comunicación clara y concisa", "Responsabilidad en el cumplimiento de tareas", 
                            "Capacidad de adaptación rápida", "Autodisciplina", "Priorización de tareas",
                            "Flexibilidad con horarios", "Atención a los detalles", "Gran capacidad de aprendizaje",
                            "Compromiso con responsabilidades", "Disponibilidad para reubicación o inicio inmediato."
                        ].map((skill, index) => (
                            <span key={index} className="flex items-center before:content-['•'] before:text-accent before:mr-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
}

const ContactItem = ({ icon: Icon, text, href }) => (
    <a href={href} className="flex items-center text-primary hover:text-accent transition duration-300">
        <Icon className="mr-2 w-4 h-4" />
        {text}
    </a>
);

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-10">
        <h2 className=" font-bold text-subtitle pb-2 mb-4 flex items-center">
            <Icon className="mr-3 text-primary" /> {title}
        </h2>
        {children}
    </section>
);

const EducationItem = ({ institution, degree, duration, details }) => (
    <div className="mb-4 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent before:rounded-full before:border-2 before:border-background">
        <h3 className=" font-semibold">{institution}</h3>
        <p className="text-primary italic mb-1">{degree}</p>
        <p className="caption text-text">{duration}</p>
        <p className="text-text mt-1">{details}</p>
    </div>
);

const SkillBlock = ({ title, items }) => (
    <div className="mb-4">
        <h4 className=" font-semibold text-text mb-2 border-b ">{title}</h4>
        <ul className="list-none space-y-1">
            {items.map((item, index) => (
                <li key={index} className=" text-text flex items-start before:content-['‣'] before:text-primary before:mr-2">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);


export default AboutPage;