import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaCode } from "react-icons/fa";
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
  const techData = TECH_MAP[techName] || { Icon: FaCode, color: "text-text" };
  return (
    <span className="flex items-center text-xs font-medium px-4 py-2 rounded-lg  shadow-inner border border-primary/50 text-text">
      <techData.Icon className={`mr-2 w-4 h-4 ${techData.color}`} />
      {techName}
    </span>
  );
};

function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background/90 px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            404 - Proyecto No Encontrado
          </h1>
          <p className="text-text mb-8">
            Lo sentimos, el ID del proyecto `{id}` no existe.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center text-accent hover:text-primary transition duration-300"
          >
            <FaArrowLeft className="mr-2" /> Volver a Proyectos
          </Link>
        </div>
      </section>
    );
  }

  const mainMedia = project.videoUrl ? (
    <iframe
      className="w-full h-full min-h-[300px] md:min-h-[500px] rounded-xl shadow-2xl border-4 border-secondary/50"
      src={project.videoUrl}
      title={project.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : (
    <img
      src={project.images[0]}
      alt={`Vista principal de ${project.title}`}
      className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-secondary/50"
    />
  );

  return (
    <section className="min-h-screen bg-secondary/10 px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <Link
            to="/projects"
            className="inline-flex items-center text-primary hover:text-accent transition duration-300 mb-4 md:mb-0"
          >
            <FaArrowLeft className="mr-2" /> Volver a Proyectos
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-title">
            {project.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">{mainMedia}</div>
          <div className="lg:col-span-1 space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {project.images &&
                project.images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-video overflow-hidden rounded-lg shadow-md border border-secondary/50 cursor-pointer hover:opacity-80 transition"
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>

            <div className="flex flex-col space-y-4 pt-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-xl bg-accent text-background border-2 border-accent hover:bg-transparent hover:text-accent"
              >
                <FaExternalLinkAlt className="mr-2" /> Ver Demo
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 bg rounded-xl shadow-xl ">
          <div className="mb-8">
            <h2 className="text-subtitle font-bold  mb-4  pb-2">
              Descripción
            </h2>
            <p className="text-caption text-text leading-relaxed whitespace-pre-wrap">
              {project.fullDescription || project.description}
            </p>
          </div>

          <div>
            <h2 className="font-bold text-paragraph mb-4 pb-2">
              Tecnologías Utilizadas
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.tech.map((techName) => (
                <TechTag key={techName} techName={techName} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
