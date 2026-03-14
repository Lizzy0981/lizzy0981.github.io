import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css';
import './styles/variables.css';
import './styles/base.css';
import './styles/animations.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  delay: 100,
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
