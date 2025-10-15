import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaInfoCircle, FaCode } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, SiMysql, SiSqlite } from 'react-icons/si';

// --- 1. DATASET DE PROYECTOS (DEBE COINCIDIR CON EL DE ProjectsPage.jsx) ---
// *Idealmente, este data set se importaría de un archivo centralizado (ej: src/data/projects.js)*
const ALL_PROJECTS = [
    {
        id: 1,
        title: "E-commerce React/Node",
        description: "Plataforma completa de venta en línea con autenticación, carrito de compras y pasarela de pago simulada. Enfoque en rendimiento y UX.",
        fullDescription: "Este proyecto de comercio electrónico fue construido desde cero utilizando el MERN stack. Se implementó un sistema de autenticación JWT robusto, gestión de estado con Redux, y una API RESTful optimizada para consultas rápidas. Las características clave incluyen un sistema de reviews, filtrado avanzado de productos, y una simulación completa del ciclo de compra.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ejemplo de video (Reemplazar con el video real del proyecto)
        images: [
            "/images/ecommerce-cart.jpg",
            "/images/ecommerce-checkout.jpg",
            "/images/ecommerce-admin.jpg"
        ],
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
        demoLink: "https://demo.ecommerce.com",
    },
    {
        id: 2,
        title: "Blog Personal con CMS",
        description: "Sistema de gestión de contenido (CMS) basado en PHP/Laravel.",
        fullDescription: "Desarrollé un CMS flexible que permite a los usuarios con diferentes niveles de permiso gestionar contenido, categorías y tags. La interfaz administrativa se construyó con Blade y Tailwind, mientras que la lógica de backend utiliza Eloquent ORM y migración de base de datos.",
        images: [
            "/images/blog-admin.jpg",
            "/images/blog-post.jpg",
            "/images/blog-mobile.jpg"
        ],
        tech: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3"],
        demoLink: "https://demo.blogcms.com",
    },
    // Añade más proyectos según sea necesario
];

// --- 2. CONFIGURACIÓN DE ICONOS Y COMPONENTES AUXILIARES (igual que en ProjectsPage) ---
const TECH_MAP = {
    'React': { Icon: SiReact, color: 'text-[#61DAFB]' },
    'Node.js': { Icon: SiNodedotjs, color: 'text-[#339933]' },
    'MongoDB': { Icon: SiMongodb, color: 'text-[#47A248]' },
    'Tailwind CSS': { Icon: SiCss3, color: 'text-[#06B6D4]' },
    'PHP': { Icon: SiPhp, color: 'text-[#777BB4]' },
    'Laravel': { Icon: SiLaravel, color: 'text-[#FF2D20]' },
    'MySQL': { Icon: SiMysql, color: 'text-[#4479A1]' },
    'JavaScript': { Icon: SiJavascript, color: 'text-[#F7DF1E]' },
    'Redux': { Icon: SiJavascript, color: 'text-[#764ABC]' },
    'HTML5': { Icon: SiHtml5, color: 'text-[#E34F26]' },
    'CSS3': { Icon: SiCss3, color: 'text-[#1572B6]' },
};

const TechTag = ({ techName }) => {
    const techData = TECH_MAP[techName] || { Icon: FaCode, color: 'text-text' };
    return (
        <span
            className={`flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-secondary shadow-inner border border-primary/50 text-text`}
        >
            <techData.Icon className={`mr-2 w-4 h-4 ${techData.color}`} />
            {techName}
        </span>
    );
};

// --- 3. COMPONENTE PRINCIPAL ---
function ProjectPage() {
    // Obtener el parámetro 'id' de la URL (asumiendo que la ruta es /projects/:id)
    const { id } = useParams();
    
    // Buscar el proyecto por ID (convertir id de string a number)
    const project = ALL_PROJECTS.find(p => p.id === parseInt(id));

    // Si el proyecto no existe, mostrar un mensaje de error
    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-background/90 px-6 py-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">404 - Proyecto No Encontrado</h1>
                    <p className="text-text mb-8">Lo sentimos, el ID del proyecto `{id}` no existe.</p>
                    <Link to="/projects" className="inline-flex items-center text-accent hover:text-primary transition duration-300">
                        <FaArrowLeft className="mr-2" /> Ver mas proyectos
                    </Link>
                </div>
            </section>
        );
    }

    // Determinar la imagen principal (si tiene video, se usa la URL del video)
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
                
                {/* Botón Volver y Título */}
                <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <Link to="/projects" className="inline-flex items-center text-primary hover:text-accent transition duration-300 mb-4 md:mb-0">
                        <FaArrowLeft className="mr-2" /> Ver mas proyectos
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-title">
                        {project.title}
                    </h1>
                </div>

                {/* --- GRID PRINCIPAL (Video/Imagen + Galería Lateral) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    
                    {/* Columna Principal (Video o Imagen) */}
                    <div className="lg:col-span-2">
                        {mainMedia}
                    </div>

                    {/* Columna Lateral (Galería y Botones de Demo) */}
                    <div className="lg:col-span-1 space-y-6">
                        
                        {/* Galería de Imágenes Pequeñas */}
                        <div className="grid grid-cols-3 gap-3">
                            {project.images && project.images.map((img, index) => (
                                <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-md border border-secondary/50 cursor-pointer hover:opacity-80 transition">
                                    <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex flex-col space-y-4 pt-4">
                            <a 
                                href={project.demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-xl 
                                           bg-accent text-background border-2 border-accent hover:bg-transparent hover:text-accent"
                            >
                                <FaExternalLinkAlt className="mr-2" /> Ver Demo en Vivo
                            </a>
                            {/* Si tuvieras un archivo .zip para descargar */}
                            {/* <a className="... border border-text/50"> <FaDownload /> Descargar Código </a> */}
                        </div>

                    </div>
                </div>

                {/* --- DESCRIPCIÓN Y TECNOLOGÍAS --- */}
                <div className="p-8 bg-secondary rounded-xl shadow-xl border border-primary/20">
                    
                    {/* Descripción */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-title mb-4 border-b border-accent/50 pb-2">
                            Descripción
                        </h2>
                        <p className="text-text leading-relaxed whitespace-pre-wrap">
                            {project.fullDescription || project.description}
                        </p>
                    </div>

                    {/* Tecnologías */}
                    <div>
                        <h2 className="text-3xl font-bold text-title mb-4 border-b border-accent/50 pb-2">
                            Tecnologías Utilizadas
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {project.tech.map(techName => (
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