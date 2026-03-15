import { FC } from 'react';
import './Papers.css';

interface Paper {
  icon: string;
  title: string;
  meta: string;
  description: string;
  status: 'published' | 'pending';
  url?: string;
  chips?: string[];
  delay: number;
}

const Papers: FC = () => {
  // ── AGREGAR PAPERS AQUÍ ───────────────────────────────────────────────────
  const papers: Paper[] = [
    {
      icon: '🌍',
      title: 'Metodología Científica para Medición de Huella de Carbono en Modelos de IA',
      meta: '2026 · Versión 1.0 · CC BY 4.0',
      description: 'Marco integral de 5 dimensiones — carbono, energía, agua, e-waste y minerales críticos — con validación empírica sobre 30+ modelos. Primera publicación independiente de esta naturaleza en República Dominicana.',
      status: 'published',
      url: '/paper/',
      chips: ['47 Referencias', '11 Idiomas', 'R²=0.89', 'Error <6%'],
      delay: 300,
    },
    {
      icon: '💧',
      title: 'Impacto de la IA Generativa en el Consumo Hídrico Global',
      meta: 'En preparación · Investigación Independiente',
      description: 'Análisis cuantitativo del consumo de agua en entrenamiento e inferencia de modelos generativos. Métricas WUE aplicadas a cargas de trabajo de IA por región geográfica.',
      status: 'pending',
      chips: ['Li et al. 2023', 'de Vries & Gao 2024', 'IEA', 'WRI Aqueduct'],
      delay: 400,
    },
    {
      icon: '⏱️',
      title: 'Optimización Temporal para Entrenamiento Sostenible',
      meta: 'En preparación · Investigación Independiente',
      description: 'Metodología para scheduling inteligente de entrenamiento basado en la intensidad de carbono del grid energético. Análisis de 10 países con datos de ElectricityMaps.',
      status: 'pending',
      chips: ['IEA', 'ElectricityMaps', 'Carbon Aware SDK'],
      delay: 500,
    },
    {
      icon: '🏗️',
      title: 'Architectural Patterns for Energy-Efficient AI',
      meta: 'En preparación · Investigación Independiente',
      description: 'Análisis comparativo de arquitecturas de modelos versus consumo energético real medido. Técnicas de pruning, quantization y distillation con métricas de eficiencia.',
      status: 'pending',
      chips: ['MLPerf', 'NVIDIA specs', 'NeurIPS / ICML'],
      delay: 600,
    },
    {
      icon: '📊',
      title: 'Economic Impact of AI Sustainability Regulations',
      meta: 'En preparación · Investigación Independiente',
      description: 'Análisis financiero del impacto de regulaciones emergentes: EU AI Act, regulaciones estatales de EE.UU. y marcos ESG corporativos.',
      status: 'pending',
      chips: ['EU AI Act', 'SEC', 'GHG Protocol'],
      delay: 700,
    },
    {
      icon: '♻️',
      title: 'Lifecycle Assessment Framework for AI Systems',
      meta: 'En preparación · Investigación Independiente',
      description: 'Marco LCA completo para sistemas de IA: desde fabricación de hardware hasta descarte, incluyendo la fase de inferencia.',
      status: 'pending',
      chips: ['ISO 14040/14044', 'TSMC data', 'Gupta et al. 2022'],
      delay: 800,
    },
    {
      icon: '⚛️',
      title: 'Carbon-Aware Machine Learning Algorithms',
      meta: 'En preparación · Investigación Independiente',
      description: 'Exploración de técnicas de entrenamiento que incorporan el costo de carbono como variable de optimización. Trade-offs rendimiento vs eficiencia energética.',
      status: 'pending',
      chips: ['Schwartz et al. 2020', 'Patterson et al. 2021', 'Green SF'],
      delay: 900,
    },
    // ── PRÓXIMOS PAPERS — agrega objetos aquí ────────────────────────────────
    // {
    //   icon: '🌱',
    //   title: 'Título del paper',
    //   meta: 'En preparación · Investigación Independiente',
    //   description: 'Descripción breve.',
    //   status: 'pending',
    //   chips: ['Fuente 1', 'Fuente 2'],
    //   delay: 1000,
    // },
  ];
  // ─────────────────────────────────────────────────────────────────────────────

  const publishedCount = papers.filter(p => p.status === 'published').length;
  const pendingCount   = papers.filter(p => p.status === 'pending').length;

  return (
    <section className="papers container" id="papers" data-aos="fade-up" data-aos-duration="1000">
      <div className="papers__header">
        <h1 className="papers__title" data-aos="fade-down" data-aos-delay="200">
          Papers Científicos
        </h1>
        <p className="papers__sub" data-aos="fade-up" data-aos-delay="300">
          Publicaciones de investigación independiente sobre inteligencia artificial sostenible.
          Datos reales, fuentes oficiales y referencias verificables.
        </p>
        <div className="papers__meta" data-aos="fade-up" data-aos-delay="350">
          <span className="papers__meta__badge papers__meta__badge--published">
            {publishedCount} publicado
          </span>
          <span className="papers__meta__badge papers__meta__badge--pending">
            {pendingCount} en preparación
          </span>
        </div>
      </div>

      <div className="papers__list">
        {papers.map((paper, index) => (
          <div
            key={index}
            className={`paper__card ${paper.status === 'pending' ? 'paper__card--pending' : ''}`}
            data-aos="fade-up"
            data-aos-delay={paper.delay}
            data-aos-duration="800"
          >
            <div className="paper__card__icon">{paper.icon}</div>

            <div className="paper__card__content">
              <div className="paper__card__badges">
                <span className={`paper__status paper__status--${paper.status}`}>
                  {paper.status === 'published' ? '● Publicado' : 'En preparación'}
                </span>
                <span className="paper__card__meta">{paper.meta}</span>
              </div>
              <h2 className="paper__card__title">{paper.title}</h2>
              <p className="paper__card__desc">{paper.description}</p>
              {paper.chips && (
                <div className="paper__card__chips">
                  {paper.chips.map((chip, i) => (
                    <span key={i} className="paper__chip">{chip}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="paper__card__right">
              {paper.status === 'published' && paper.url ? (
                <a href={paper.url} className="paper__cta" target="_blank" rel="noopener noreferrer">
                  Leer →
                </a>
              ) : (
                <span className="paper__cta paper__cta--soon">Próximamente</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Papers;
