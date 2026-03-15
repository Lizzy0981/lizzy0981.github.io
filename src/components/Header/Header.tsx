import { FC, useEffect } from 'react';
import './Header.css';

const Header: FC = () => {
  useEffect(() => {
    const openMenuBtn = document.querySelector('.menu__open');
    const closeMenuBtn = document.querySelector('.menu__close');
    const navList = document.querySelector('.menu__list');

    const openMenu = () => {
      if (navList && closeMenuBtn && openMenuBtn) {
        navList.classList.add('menu__list--active');
        closeMenuBtn.classList.add('menu__close--active');
        openMenuBtn.classList.add('menu__open--hidden');
      }
    };
    const closeMenu = () => {
      if (navList && closeMenuBtn && openMenuBtn) {
        navList.classList.remove('menu__list--active');
        closeMenuBtn.classList.remove('menu__close--active');
        openMenuBtn.classList.remove('menu__open--hidden');
      }
    };
    const handleMenuItemClick = () => {
      if (window.innerWidth < 1024) closeMenu();
    };

    openMenuBtn?.addEventListener('click', openMenu);
    closeMenuBtn?.addEventListener('click', closeMenu);
    const menuItems = document.querySelectorAll('.menu__link');
    menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));

    return () => {
      openMenuBtn?.removeEventListener('click', openMenu);
      closeMenuBtn?.removeEventListener('click', closeMenu);
      menuItems.forEach(item => item.removeEventListener('click', handleMenuItemClick));
    };
  }, []);

  const menuItems = [
    { href: '#sobre-mi', text: 'About',     delay: 200 },
    { href: '#blog',     text: 'Blog',      delay: 300 },
    { href: '#papers',   text: 'Papers',    delay: 400 },
    { href: '#proyectos',text: 'Proyectos', delay: 500 },
    { href: '#contacto', text: 'Contacto',  delay: 600, isContact: true },
  ];

  return (
    <header className="header container" data-aos="fade-down" data-aos-duration="800">
      <h1 className="header__logo" data-aos="fade-right" data-aos-delay="200">
        <a href="#">Lizzy Familia</a>
      </h1>
      <nav className="menu">
        <ul className="menu__list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu__item ${item.isContact ? 'menu__item--contacto' : ''}`}
              data-aos="fade-down"
              data-aos-delay={item.delay}
            >
              <a className="menu__link" href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
        <button className="menu__open" data-aos="fade-left" data-aos-delay="700">
          <i className="uil uil-bars"></i>
        </button>
        <button className="menu__close" data-aos="fade-left" data-aos-delay="700">
          <i className="uil uil-multiply"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
