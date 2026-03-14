import { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade" data-aos-duration="1000">
      <div className="footer__container" data-aos="fade-up" data-aos-delay="200">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name">Elizabeth Díaz Familia</p>
            <p className="footer__tagline">
              Sustainable AI Scientist · AI Data Scientist · Sustainable Intelligence &amp; BI
            </p>
          </div>
          <nav className="footer__nav">
            <a href="#sobre-mi">About</a>
            <a href="#blog">Blog</a>
            <a href="#papers">Papers</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Elizabeth Díaz Familia · CC BY 4.0
          </p>
          <div className="footer__social">
            <a href="https://github.com/Lizzy0981" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/eli-familia/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/Lizzyfamilia" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="mailto:lizzyfamilia@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
