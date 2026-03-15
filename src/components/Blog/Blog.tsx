import { FC } from 'react';
import './Blog.css';

interface BlogPost {
  icon: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  url?: string;
  published: boolean;
  delay: number;
}

const Blog: FC = () => {
  // ── AGREGAR ARTÍCULOS AQUÍ ────────────────────────────────────────────────
  const posts: BlogPost[] = [
    {
      icon: '🌍',
      title: 'Por qué entrenar GPT-4 contamina 100× más que Claude',
      description: 'Análisis comparativo de emisiones de CO₂ entre los principales modelos de IA, con datos verificados de fuentes oficiales.',
      category: 'Green AI',
      date: 'Próximamente',
      published: false,
      delay: 200,
    },
    {
      icon: '💧',
      title: 'El agua que consume la IA: datos que nadie te cuenta',
      description: 'Cada consulta a ChatGPT consume agua real. Aquí los números detrás del consumo hídrico de los centros de datos.',
      category: 'Green AI',
      date: 'Próximamente',
      published: false,
      delay: 300,
    },
    {
      icon: '📊',
      title: 'Cómo medir la huella de carbono de tu modelo de ML',
      description: 'Tutorial práctico usando CodeCarbon y la metodología Díaz Familia (2026) para calcular el impacto ambiental.',
      category: 'Tutorial',
      date: 'Próximamente',
      published: false,
      delay: 400,
    },
    {
      icon: '⚡',
      title: 'DeepSeek-R1: rendimiento similar, 96% menos emisiones',
      description: 'Un análisis técnico de por qué la arquitectura de DeepSeek-R1 logra resultados comparables a GPT-4o con una fracción del costo energético.',
      category: 'Análisis',
      date: 'Próximamente',
      published: false,
      delay: 500,
    },
    {
      icon: '🔬',
      title: 'Metodología científica para evaluar impacto ambiental de IA',
      description: 'Cómo construí la metodología del paper: fuentes, fórmulas, validación y los errores que cometí en el camino.',
      category: 'Research',
      date: 'Próximamente',
      published: false,
      delay: 600,
    },
    {
      icon: '🏢',
      title: 'ESG y IA: métricas que las empresas deben reportar',
      description: 'Guía práctica para equipos de compliance sobre qué métricas de impacto de IA incluir en reportes ESG.',
      category: 'ESG',
      date: 'Próximamente',
      published: false,
      delay: 700,
    },
    // ── PRÓXIMOS ARTÍCULOS — agrega objetos aquí ─────────────────────────────
    // {
    //   icon: '🌱',
    //   title: 'Título del artículo',
    //   description: 'Descripción breve.',
    //   category: 'Green AI',
    //   date: 'Próximamente',
    //   published: false,
    //   delay: 800,
    // },
  ];
  // ─────────────────────────────────────────────────────────────────────────────

  const publishedCount = posts.filter(p => p.published).length;
  const comingCount    = posts.filter(p => !p.published).length;

  return (
    <section className="blog container" id="blog" data-aos="fade-up" data-aos-duration="800">
      <div className="blog__header">
        <h1 className="blog__title" data-aos="fade-down" data-aos-delay="100">Blog</h1>
        <p className="blog__sub" data-aos="fade-up" data-aos-delay="200">
          Artículos sobre IA sostenible, green computing y ciencia de datos ambiental.
          Datos reales, fuentes verificables, sin afirmaciones sin respaldo.
        </p>
        <div className="blog__meta" data-aos="fade-up" data-aos-delay="250">
          {publishedCount > 0 && (
            <span className="blog__meta__badge blog__meta__badge--published">
              {publishedCount} publicado{publishedCount > 1 ? 's' : ''}
            </span>
          )}
          <span className="blog__meta__badge blog__meta__badge--coming">
            {comingCount} en preparación
          </span>
        </div>
      </div>

      <div className="blog__grid">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`blog__card ${!post.published ? 'blog__card--coming' : ''}`}
            data-aos="zoom-in"
            data-aos-delay={post.delay}
          >
            <div className="blog__card__top">
              <span className="blog__card__icon">{post.icon}</span>
              <span className="blog__card__category">{post.category}</span>
            </div>
            <h4 className="blog__card__title">{post.title}</h4>
            <p className="blog__card__desc">{post.description}</p>
            <div className="blog__card__footer">
              {post.published && post.url ? (
                <a href={post.url} className="blog__card__cta" target="_blank" rel="noopener noreferrer">
                  Leer artículo →
                </a>
              ) : (
                <span className="blog__card__soon">Próximamente</span>
              )}
            </div>
          </div>
        ))}

        {/* Tarjeta permanente */}
        <div className="blog__card blog__card--more" data-aos="zoom-in" data-aos-delay="800">
          <div className="blog__card__top">
            <span className="blog__card__icon">✍️</span>
          </div>
          <h4 className="blog__card__title">Más artículos en camino</h4>
          <p className="blog__card__desc">
            Publico sobre IA sostenible, datos ambientales y metodología científica.
          </p>
          <div className="blog__card__footer">
            <a href="https://github.com/Lizzy0981" className="blog__card__cta" target="_blank" rel="noopener noreferrer">
              Seguir en GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
