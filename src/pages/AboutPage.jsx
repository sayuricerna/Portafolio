import React from 'react';
import { FaEnvelope, FaGithub, FaPhone, FaGlobe, FaGraduationCap, FaCertificate, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function AboutPage() {
    const CONTACT_INFO = {
        name: "SAYURI CERNA",
        email: "cernasayuri@gmail.com",
        github: "Tu_Usuario_Github",
        phone: "+593 980 277 855",
        languages: "Español (Nativo), Inglés (B2), Ruso (B1)",
    };

    return (
        <div className="bg-background min-h-screen py-16 px-6">
            <div className="container mx-auto max-w-4xl shadow-2xl rounded-lg p-8 md:p-12 lg:p-16">
                <header className="border-b-2 border-primary/50 pb-6 mb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-title mb-2 tracking-wide">
                        {CONTACT_INFO.name}
                    </h1>
                    <div className="flex flex-wrap text-text mt-3 gap-y-1 gap-x-6">
                        <ContactItem icon={FaEnvelope} text={CONTACT_INFO.email} href={`mailto:${CONTACT_INFO.email}`} />
                        <ContactItem icon={FaGithub} text="Github" href={`https://github.com/${CONTACT_INFO.github}`} />
                        <ContactItem icon={FaPhone} text={CONTACT_INFO.phone} />
                    </div>
                    <p className=" text-text mt-3">
                        <span className="font-semibold text-primary">Idiomas:</span> {CONTACT_INFO.languages}
                    </p>
                </header>
                <div className="text-center mb-10">
                    <AboutButton primary={true} href="/downloads/tu_cv_completo.pdf">
                        <FaDownload className="mr-2" /> Descargar CV Completo
                    </AboutButton>
                </div>

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
        <h2 className=" font-bold text-title border-b border-primary/20 pb-2 mb-4 flex items-center">
            <Icon className="mr-3 text-primary" /> {title}
        </h2>
        {children}
    </section>
);

const EducationItem = ({ institution, degree, duration, details }) => (
    <div className="mb-4 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent before:rounded-full before:border-2 before:border-background">
        <h3 className=" font-semibold text-subtitle">{institution}</h3>
        <p className="text-primary italic mb-1">{degree}</p>
        <p className="text-caption text-text">{duration}</p>
        <p className=" text-text mt-1">{details}</p>
    </div>
);

const SkillBlock = ({ title, items }) => (
    <div className="mb-4">
        <h4 className=" font-semibold text-accent mb-2 border-b border-accent/20">{title}</h4>
        <ul className="list-none space-y-1">
            {items.map((item, index) => (
                <li key={index} className=" text-text flex items-start before:content-['‣'] before:text-primary before:mr-2">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const AboutButton = ({ children, primary, href }) => {
    const isExternal = href.includes('pdf') || href.startsWith('http') || href.startsWith('#');
    const baseClasses = `flex items-center px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md`;
    const styleClasses = primary 
        ? 'bg-accent text-background hover:bg-primary hover:text-white' 
        : 'bg-background text-primary border-2 border-primary hover:bg-primary hover:text-text';

    if (isExternal) {
        return (
            <a 
                href={href} 
                className={`${baseClasses} ${styleClasses}`}
                target={href.includes('pdf') ? '_blank' : '_self'}
                rel={href.includes('pdf') ? 'noopener noreferrer' : ''}
            >
                {children}
            </a>
        );
    }
    
    return (
        <Link 
            to={href} 
            className={`${baseClasses} ${styleClasses}`}
        >
            {children}
        </Link>
    );
};


export default AboutPage;