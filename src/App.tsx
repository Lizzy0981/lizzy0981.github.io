import { FC } from 'react';
import Header   from './components/Header/Header';
import Hero     from './components/Hero/Hero';
import About    from './components/About/About';
import Blog     from './components/Blog/Blog';
import Papers   from './components/Papers/Papers';
import Portfolio from './components/Portfolio/Portfolio';
import Contact  from './components/Contact/Contact';
import Footer   from './components/Footer/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        <Papers />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
