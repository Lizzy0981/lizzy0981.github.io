import { FC } from 'react';
import './About.css';

const About: FC = () => {
  const skills = [
    'Green AI', 'Machine Learning', 'Deep Learning', 'IA Generativa',
    'ESG Analytics', 'Data Visualization', 'Python', 'AI Engineering',
    'Power BI', 'React', 'FastAPI', 'TensorFlow', 'Scikit-learn',
    'Pandas', 'D3.js', 'PostgreSQL', 'Docker', 'Computación Cuántica',
  ];

  return (
    <section className="sobre-mi container" id="sobre-mi" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="sobre-mi__title" data-aos="fade-down" data-aos-delay="200">
        Sobre mí
      </h1>

      <div className="sobre-mi__content" data-aos="fade-up" data-aos-delay="400">
        <p className="sobre-mi__text">
          Soy Elizabeth, científica de datos y desarrolladora apasionada por construir cosas útiles
          con código y datos. Me muevo entre el análisis, la visualización y el desarrollo de
          aplicaciones web.
        </p>
        <p className="sobre-mi__text" style={{ marginTop: '1rem' }}>
          Últimamente me he interesado en el tema de la sostenibilidad en la IA — leo mucho sobre
          ello, analizo los datos que existen y trato de hacer algo concreto con esa información.
          No tengo respuestas definitivas, pero sí muchas preguntas y ganas de trabajar.
        </p>
      </div>

      {/* Stack / Skills */}
      <div className="sobre-mi__skills" data-aos="fade-up" data-aos-delay="600">
        <p className="sobre-mi__skills__label">Stack principal</p>
        <div className="sobre-mi__skills__grid">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="sobre-mi__skill"
              data-aos="zoom-in"
              data-aos-delay={100 + index * 40}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="sobre-mi__actions" data-aos="fade-up" data-aos-delay="800">
        <a
          href="https://linkedin.com/in/eli-familia/"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Lizzy0981"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default About;
