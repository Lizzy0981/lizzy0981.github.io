import { FC } from 'react';
import './Portfolio.css';

interface Project {
  image: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  delay: number;
  featured?: boolean;
}

const Portfolio: FC = () => {
  // ── AGREGAR PROYECTOS AQUÍ ────────────────────────────────────────────────
  const projects: Project[] = [
    {
      image: '/assets/img/proyectos/calculadora-carbono.png',
      title: 'Calculadora de Huella de Carbono IA',
      description: 'Herramienta científica pública para medir el impacto ambiental de 50 modelos de IA en 5 dimensiones: CO₂, energía, agua, e-waste y minerales críticos. APIs en tiempo real, 11 idiomas, modo offline.',
      tech: ['HTML5', 'JavaScript', 'Chart.js', 'Service Worker', '11 idiomas'],
      github: 'https://github.com/Lizzy0981/calculadora-huella-carbono-ia',
      demo: 'https://lizzy0981.github.io/calculadora-huella-carbono-ia/',
      featured: true,
      delay: 200,
    },
    {
      image: '/assets/img/proyectos/photografy.jpeg',
      title: 'Photography Portfolio',
      description: 'Portfolio fotográfico profesional con galería interactiva, lightbox y diseño responsive. Construido con TypeScript y React.',
      tech: ['TypeScript', 'React', 'CSS3'],
      github: 'https://github.com/Lizzy0981/Photography-Portfolio',
      demo: 'https://photografy-portfolio-chi.vercel.app/',
      delay: 300,
    },
    {
      image: '/assets/img/proyectos/alurageek.png',
      title: 'AluraGeek',
      description: 'Tienda de productos geek con carrito de compras, CRUD completo y JSON Server como backend simulado.',
      tech: ['JavaScript', 'JSON Server', 'CSS3', 'REST API'],
      github: 'https://github.com/Lizzy0981/Challenge-Alura-Geek',
      demo: 'https://glowing-bublanina-3f0328.netlify.app/',
      delay: 400,
    },
    {
      image: '/assets/img/proyectos/encriptador.png',
      title: 'Encriptador de Texto',
      description: 'Aplicación web para encriptar y desencriptar mensajes con sustitución de vocales. Interfaz accesible y responsive.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/Lizzy0981/alura-challenge-encriptador-de-texto',
      demo: 'https://alura-challenge-encriptador-de-texto-sable.vercel.app/',
      delay: 500,
    },
    {
      image: '/assets/img/proyectos/portafoliofrontend.jpeg',
      title: 'Portfolio React & TypeScript',
      description: 'Portfolio personal con React 18 y TypeScript, animaciones AOS, glassmorphism y diseño dark futurista.',
      tech: ['React 18', 'TypeScript', 'Vite', 'AOS'],
      github: 'https://github.com/Lizzy0981/Challenge-Portafolio',
      demo: 'https://challenge-portafolio-tau.vercel.app/',
      delay: 600,
    },
    {
      image: '/assets/img/proyectos/tiendamodaregistro.jpeg',
      title: 'TiendaModa Registro',
      description: 'Sistema de registro y gestión de usuarios para tienda de moda. Formularios validados y almacenamiento local.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
      github: 'https://github.com/Lizzy0981/tiendamoda-registro',
      demo: 'https://tiendamoda-registro.vercel.app/',
      delay: 700,
    },
    // ── PRÓXIMOS PROYECTOS — agrega objetos aquí ─────────────────────────────
    // {
    //   image: '/assets/img/proyectos/nombre-imagen.png',
    //   title: 'Nombre del proyecto',
    //   description: 'Descripción breve del proyecto y sus características principales.',
    //   tech: ['React', 'Python', 'FastAPI'],
    //   github: 'https://github.com/Lizzy0981/repo',
    //   demo: 'https://demo-url.com',
    //   delay: 800,
    // },
  ];
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <section id="proyectos" className="portfolios container" data-aos="fade-up" data-aos-duration="1000">
      <div className="portfolios__header">
        <h1 className="portfolios__title" data-aos="fade-down" data-aos-delay="200">
          Proyectos
        </h1>
        <p className="portfolios__sub" data-aos="fade-up" data-aos-delay="300">
          Proyectos reales desplegados y disponibles públicamente.
          Cada uno construido con datos, código y mucha curiosidad.
        </p>
        <p className="portfolios__count" data-aos="fade-up" data-aos-delay="350">
          {projects.length} proyectos
        </p>
      </div>

      <div className="portfolios__grid">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`portfolio__card ${project.featured ? 'portfolio__card--featured' : ''}`}
            data-aos="fade-up"
            data-aos-delay={project.delay}
            data-aos-duration="800"
          >
            <span className="portfolio__card__num">0{index + 1}</span>

            <div className="portfolio__card__img">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="portfolio__card__body">
              <h2 className="portfolio__card__title">{project.title}</h2>
              <p className="portfolio__card__desc">{project.description}</p>
              <div className="portfolio__card__tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="portfolio__card__tag">{t}</span>
                ))}
              </div>
              <div className="portfolio__card__btns">
                <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* Tarjeta permanente "más proyectos en camino" */}
        <article className="portfolio__card portfolio__card--more" data-aos="fade-up" data-aos-delay="800">
          <div className="portfolio__card__body portfolio__card__body--more">
            <span className="portfolio__more__icon">🚀</span>
            <h2 className="portfolio__card__title">Más proyectos en desarrollo</h2>
            <p className="portfolio__card__desc">
              Trabajando en herramientas de Green AI, dashboards ESG, APIs de carbono y más.
              Todos con datos reales y metodología documentada.
            </p>
            <div className="portfolio__card__btns">
              <a href="https://github.com/Lizzy0981" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Ver GitHub →
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
