import { FC } from 'react';
import './Hero.css';

interface SocialLink {
  icon: string;
  url: string;
  delay: number;
  label: string;
}

const Hero: FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: 'uil uil-github',   url: 'https://github.com/Lizzy0981',             delay: 1400, label: 'GitHub'   },
    { icon: 'uil uil-linkedin', url: 'https://www.linkedin.com/in/eli-familia/',  delay: 1500, label: 'LinkedIn' },
    { icon: 'uil uil-twitter',  url: 'https://twitter.com/Lizzyfamilia',          delay: 1600, label: 'Twitter'  },
  ];

  return (
    <section className="banner container" data-aos="fade" data-aos-duration="1000">
      <div className="banner__img"></div>
      <div className="hero" data-aos="fade-up" data-aos-delay="300">

        <img
          src="/assets/img/about.png"
          alt="Elizabeth Díaz Familia"
          className="hero__img__profile"
          data-aos="zoom-in"
          data-aos-delay="600"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        <div className="hero__text">
          <div className="hero__badge" data-aos="fade-down" data-aos-delay="700">
            <span className="hero__badge__dot"></span>
            Sustainable AI · Data Science · Green Computing
          </div>

          <h1 className="hero__text__title" data-aos="fade-right" data-aos-delay="800">
            Elizabeth Díaz Familia
          </h1>

          <p className="hero__text__role" data-aos="fade-left" data-aos-delay="900">
            <strong>Sustainable AI Scientist</strong> · AI Data Scientist · Sustainable Intelligence &amp; BI
          </p>

          <p className="hero__text__paragraph" data-aos="fade-left" data-aos-delay="1000">
            Me apasiona la ciencia de datos, el desarrollo de aplicaciones y entender cómo la
            tecnología afecta al mundo que nos rodea. Trabajo con datos, código y mucha curiosidad.
          </p>
        </div>

        <ul className="hero__text__list" data-aos="fade-up" data-aos-delay="1200">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="hero__text__list__item"
              data-aos="zoom-in"
              data-aos-delay={link.delay}
            >
              <a
                href={link.url}
                className="hero__text__list__item__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
          <li
            className="hero__text__list__item"
            data-aos="zoom-in"
            data-aos-delay="1700"
          >
            <a
              href="#papers"
              className="hero__text__list__item__link hero__text__list__item__link--papers"
            >
              Papers
            </a>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Hero;
