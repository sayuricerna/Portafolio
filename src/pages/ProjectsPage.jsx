import React, { useState } from "react";
// Importamos Link para la navegación interna de React Router
import { Link } from "react-router-dom"; 
import { FaExternalLinkAlt, FaInfoCircle, FaCode } from "react-icons/fa";

// --- DATASET ---
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "E-commerce React/Node",
    description:
      "Plataforma completa de venta en línea con autenticación, carrito de compras y pasarela de pago simulada. Enfoque en rendimiento y UX.",
    // Usamos placeholder para evitar rutas de imagen rotas al previsualizar
    image: "https://placehold.co/600x400/1e293b/a5f3fc?text=E-Commerce+Preview", 
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    detailsLink: "/projects/1",
    demoLink: "https://demo.ecommerce.com",
  },
  {
    id: 2,
    title: "Blog Personal con CMS",
    description:
      "Sistema de gestión de contenido (CMS) basado en PHP/Laravel que permite la creación, edición y publicación de artículos de manera ágil.",
    // Usamos placeholder para evitar rutas de imagen rotas al previsualizar
    image: "https://placehold.co/600x400/1e293b/fbcfe8?text=Blog+Preview",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
    detailsLink: "/projects/2",
    demoLink: "https://demo.blogcms.com",
  },
];

const TECH_COLORS = {
  React: "text-[#61DAFB]",
  "Node.js": "text-[#339933]",
  MongoDB: "text-[#47A248]",
  "Tailwind CSS": "text-[#06B6D4]",
  PHP: "text-[#777BB4]",
  Laravel: "text-[#FF2D20]",
  MySQL: "text-[#4479A1]",
  JavaScript: "text-[#F7DF1E]",
};

const ProjectButton = ({ children, href, icon: Icon, primary }) => {
  const isInternal = href.startsWith('/');
  const baseClasses = `flex items-center px-5 py-2 rounded-lg font-semibold text-sm transition duration-300 shadow-md`;
  const colorClasses = primary
    ? "bg-primary text-white hover:bg-accent"
    : "bg-background text-accent border border-accent hover:bg-accent hover:text-background";

  if (isInternal) {
    return (
      <Link 
        to={href} 
        className={`${baseClasses} ${colorClasses}`}
        // Evita que abra nueva pestaña
        target="_self"
      >
        <Icon className="mr-2" /> {children}
      </Link>
    );
  }

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${colorClasses}`}
    >
      <Icon className="mr-2" /> {children}
    </a>
  );
};

function Projects() {
  const [selectedTechs, setSelectedTechs] = useState([]);

  const allTechs = Array.from(new Set(FEATURED_PROJECTS.flatMap((p) => p.tech)));

  const toggleTech = (tech) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter((t) => t !== tech));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const filteredProjects =
    selectedTechs.length === 0
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) =>
          // Filtra proyectos que contienen *TODAS* las tecnologías seleccionadas
          selectedTechs.every((t) => p.tech.includes(t)) 
        );

  return (
    // Se elimina la opacidad: bg-secondary/20 -> bg-secondary
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-title text-center mb-12 animate-fade-in-up">
          Mis <span className="text-primary">Proyectos</span>
        </h2>

        {/* FILTRO POR TECNOLOGÍA */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedTechs([])}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition duration-300 shadow-md ${
              selectedTechs.length === 0
                ? "bg-primary text-white border-primary"
                : "bg-background text-title border-gray-300 hover:bg-primary hover:text-white"
            }`}
          >
            Todos
          </button>

          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition duration-300 shadow-md ${
                selectedTechs.includes(tech)
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-title border-gray-300 hover:bg-primary hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-center text-text italic">
              No hay proyectos que usen todas las tecnologías seleccionadas.
            </p>
          )}
        </div>

        {/* BOTÓN VER TODOS */}
        <div className="text-center mt-16">
          <Link // También usamos Link aquí
            to="/projects"
            className="inline-flex items-center px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-xl 
                             bg-accent text-background border-2 border-accent hover:bg-transparent hover:text-accent"
          >
            <FaCode className="mr-2" /> Ver más proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => (
  // Se elimina la opacidad: bg-secondary/50 -> bg-secondary
  <div className="flex flex-col lg:flex-row rounded-xl shadow-2xl overflow-hidden transform transition duration-500 bg-secondary">
    <div className="lg:w-1/2 p-4 lg:p-0">
      <div className="h-full w-full bg-secondary rounded-lg lg:rounded-none overflow-hidden flex items-center justify-center">
        <img
          src={project.image}
          alt={`Captura de ${project.title}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className="lg:w-1/2 p-6 md:p-8 space-y-4">
      <h3 className="text-3xl font-bold text-title">{project.title}</h3>
      <p className="text-text leading-relaxed">{project.description}</p>

      <div>
        <h4 className="text-sm font-semibold text-accent uppercase mb-2">
          Tecnologías:
        </h4>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((techName) => (
            <span
              key={techName}
              // Se elimina la opacidad: bg-secondary/40 -> bg-secondary
              className={`flex items-center text-xs font-medium px-3 py-1 rounded-full border border-primary/50 text-text bg-secondary ${
                TECH_COLORS[techName] || "text-text"
              }`}
            >
              {techName}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 pt-4">
        <ProjectButton
          href={project.detailsLink}
          icon={FaInfoCircle}
          primary={false}
        >
          Detalles
        </ProjectButton>
        <ProjectButton
          href={project.demoLink}
          icon={FaExternalLinkAlt}
          primary={true}
        >
          Ver Demo
        </ProjectButton>
      </div>
    </div>
  </div>
);

export default Projects;
