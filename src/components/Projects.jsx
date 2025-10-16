import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaInfoCircle, FaCode } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import projectsData from "../data/projects.json";

const TECH_MAP = {
  React: { Icon: SiReact, color: "text-[#61DAFB]" },
  "Node.js": { Icon: SiNodedotjs, color: "text-[#339933]" },
  MongoDB: { Icon: SiMongodb, color: "text-[#47A248]" },
  "Tailwind CSS": { Icon: SiCss3, color: "text-[#06B6D4]" },
  PHP: { Icon: SiPhp, color: "text-[#777BB4]" },
  Laravel: { Icon: SiLaravel, color: "text-[#FF2D20]" },
  MySQL: { Icon: SiMysql, color: "text-[#4479A1]" },
  JavaScript: { Icon: SiJavascript, color: "text-[#F7DF1E]" },
  Redux: { Icon: SiJavascript, color: "text-[#764ABC]" },
  HTML5: { Icon: SiHtml5, color: "text-[#E34F26]" },
  CSS3: { Icon: SiCss3, color: "text-[#1572B6]" },
};

const TechTag = ({ techName }) => {
  const techData = TECH_MAP[techName] || { Icon: FaInfoCircle, color: "text-text" };
  return (
    <span className="flex items-center text-xs font-medium px-3 py-1 rounded-full border border-primary">
      <techData.Icon className={`mr-2 w-4 h-4 ${techData.color}`} />
      {techName}
    </span>
  );
};

const ProjectButton = ({ children, href, icon: Icon, primary }) => {
  const isInternal = href.startsWith("/");
  const baseClasses =
    "flex items-center px-5 py-2 rounded-lg font-semibold text-sm transition duration-300 shadow-md";
  const colorClasses = primary
    ? "bg-primary text-white hover:bg-accent"
    : "bg-background text-accent border border-accent hover:bg-accent hover:text-background";

  if (isInternal) {
    return (
      <Link to={href} className={`${baseClasses} ${colorClasses}`}>
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

// function Projects() {
//   const [selectedTechs, setSelectedTechs] = useState([]);
//   const allTechs = Array.from(new Set(projectsData.flatMap((p) => p.tech)));

//   const toggleTech = (tech) => {
//     setSelectedTechs((prev) =>
//       prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
//     );
//   };

//   const filteredProjects =
//     selectedTechs.length === 0
//       ? projectsData
//       : projectsData.filter((p) =>
//           selectedTechs.every((t) => p.tech.includes(t))
//         );

//   return (
//     <section id="projects" className="py-20 px-6 bg-background text-title">
//       <div className="container mx-auto max-w-6xl">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
//           Mis <span className="text-primary">Proyectos</span>
//         </h2>

//         {/* Filtro */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           <button
//             onClick={() => setSelectedTechs([])}
//             className={`px-4 py-2 rounded-full font-semibold border transition duration-300 shadow-md ${
//               selectedTechs.length === 0
//                 ? "bg-primary  text-paragraph border-primary"
//                 : "bg-background text-paragraph border-gray-300 hover:bg-primary"
//             }`}
//           >
//             Todos
//           </button>

//           {allTechs.map((tech) => (
//             <button
//               key={tech}
//               onClick={() => toggleTech(tech)}
//               className={`px-4 py-2 rounded-full font-semibold border transition duration-300 shadow-md ${
//                 selectedTechs.includes(tech)
//                   ? "bg-primary text-paragraph border-primary"
//                   : "bg-background text-paragraph border-gray-300 hover:bg-primary"
//               }`}
//             >
//               {tech}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 gap-12 lg:gap-16">
//           {filteredProjects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//         <div className="text-center mt-16">
//           <Link
//             to="/projects"
//             className="text-paragraph inline-flex items-center px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-xl 
//                         bg-accent text-background border-2 border-accent hover:bg-transparent hover:text-accent"
//           >
//             <FaCode className="mr-2" /> Ver más proyectos
//           </Link>
//         </div>


//       </div>
//     </section>
//   );
// }

// 💡 Cambiamos la firma para aceptar 'initialLimit'
function Projects({ initialLimit }) {
  const ITEMS_PER_PAGE = 5; // 💡 Define el tamaño de la "página"
  
  const [selectedTechs, setSelectedTechs] = useState([]);
  // 💡 Si estamos en la página de proyectos (sin initialLimit), empezamos mostrando 10, sino el initialLimit
  const [displayLimit, setDisplayLimit] = useState(
    initialLimit || ITEMS_PER_PAGE
  ); 
  
  const allTechs = Array.from(new Set(projectsData.flatMap((p) => p.tech)));

  const toggleTech = (tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
    // 💡 Resetear el límite al aplicar el filtro
    setDisplayLimit(initialLimit || ITEMS_PER_PAGE);
  };

  // Filtra los proyectos
  const filteredProjects =
    selectedTechs.length === 0
      ? projectsData
      : projectsData.filter((p) =>
          selectedTechs.every((t) => p.tech.includes(t))
        );
  
  // 💡 Aplica el límite de visualización
  const projectsToDisplay = filteredProjects.slice(0, displayLimit);
  
  // 💡 Lógica para el botón "Ver Más" de la paginación
  const handleLoadMore = () => {
    setDisplayLimit(prevLimit => prevLimit + ITEMS_PER_PAGE);
  };

  // 💡 Determinar si mostrar el botón de paginación o el de ir a la página de proyectos
  const isProjectPage = !initialLimit; // True si no se pasa initialLimit (ProjectsPage)
  const hasMoreProjects = filteredProjects.length > displayLimit;
  
  // 💡 Título se cambia basado en si tiene initialLimit o no
  const titleText = isProjectPage ? "Todos mis Proyectos" : "Proyectos Destacados";


  return (
    <section id="projects" className="py-20 px-6 bg-background text-title">
      <div className="container mx-auto max-w-5xl">
        <h2 className=" md:text-5xl font-extrabold text-title text-center mb-12">
          {titleText}
        </h2>

        {isProjectPage && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedTechs([])}
              className={`px-4 py-2 rounded-full font-semibold border transition duration-300 shadow-md ${
                selectedTechs.length === 0
                  ? "bg-primary text-caption border-primary" 
                  : "bg-background text-caption border-gray-300 hover:bg-primary"
              }`}
            >
              Todos
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`px-4 py-2 rounded-full font-semibold border transition duration-300 shadow-md ${
                  selectedTechs.includes(tech)
                    ? "bg-primary text-caption border-primary"
                    : "bg-background text-caption border-gray-300 hover:bg-primary "
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          {
            !isProjectPage ? ( 
              <Link
                to="/projects"
                className="text-caption inline-flex items-center px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-xl 
                            bg-accent text-background border-2 border-accent hover:bg-transparent hover:text-accent"
              >
                <FaCode className=" mr-2" /> Ver más proyectos
              </Link>
            ) 
            : hasMoreProjects && (
              <button
                onClick={handleLoadMore}
                className="text-caption inline-flex items-center px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-xl 
                            bg-accent text-background border-2 border-accent hover:bg-transparent hover:text-accent"
              >
                <FaChevronDown className="mr-2" /> Ver más ({Math.min(ITEMS_PER_PAGE, filteredProjects.length - displayLimit)})
              </button>
            )
          }
        </div>


      </div>
    </section>
  );
}






const ProjectCard = ({ project }) => (
  <div className="flex flex-col md:flex-row rounded-xl shadow-2xl overflow-hidden transform transition duration-500 bg-[#ffffff0f]">
    <div className="md:w-1/2 p-4 md:p-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="md:w-1/2 p-6 md:p-8 space-y-4">
      <h3 className="text-3xl font-bold text-title">{project.title}</h3>
      <p className="text-text leading-relaxed">{project.description}</p>

      <div>
        <h4 className="text-caption font-thin text-accent uppercase mb-2">
          Tecnologías:
        </h4>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <TechTag key={tech} techName={tech} />
          ))}
        </div>
      </div>

      <div className="flex space-x-4 pt-4">
        <ProjectButton href={project.detailsLink} icon={FaInfoCircle}>
          Detalles
        </ProjectButton>
        <ProjectButton href={project.demoLink} icon={FaExternalLinkAlt} primary>
          Ver Demo
        </ProjectButton>
      </div>
    </div>
  </div>
);

export default Projects;
