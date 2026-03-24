import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import { caseStudies } from '../data';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Home() {
  const animatedPhrases = [
    "I've helped 50+ companies grow organically",
    'I focus on results that actually matter',
    "I'm passionate about helping businesses grow",
  ];

  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Matt Keller | Digital Marketing Portfolio</title>
        <meta
          name="description"
          content="Digital marketer specializing in technical SEO and content strategy. Explore case studies driving measurable growth in organic traffic and visibility."
        />
        <link rel="canonical" href="https://mattkellerdigital.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matt Keller | Digital Marketing Portfolio" />
        <meta
          property="og:description"
          content="Digital marketer specializing in technical SEO and content strategy. Explore real case studies with measurable growth."
        />
        <meta property="og:url" content="https://mattkellerdigital.com/" />
        <meta property="og:image" content="https://mattkellerdigital.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matt Keller | Digital Marketing Portfolio" />
        <meta
          name="twitter:description"
          content="Technical SEO, content strategy, and real growth results. Explore case studies."
        />
        <meta name="twitter:image" content="https://mattkellerdigital.com/og-image.jpg" />
      </Helmet>
      <section className="hero">
        <div className="hero-left">
          <h1>
            <span className="name-line">Hello, I&apos;m Matt</span>
            <span className="animated-line">
              <AnimatedText phrases={animatedPhrases} />
            </span>
          </h1>
        </div>

        <div className="hero-right">
          <div className="headshot">
            <img
              src="/matt-keller-headshot-1.webp"
              alt="Matt Keller"
              loading="eager"
            />
          </div>

          <h2>Nice to meet you!</h2>
          <p>
            I&apos;m a results-driven digital marketer based in Philadelphia with
            expertise in technical SEO, content strategy, and data-driven growth.
            I help businesses increase organic traffic and drive measurable revenue.
          </p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/mkellphoto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/matthew-d-keller/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="case-studies-grid">
          {featuredStudies.map((study) => (
            <Link
              to={`/work/${study.id}`}
              key={study.id}
              className="case-study-card"
            >
              <div className="case-study-image">
                {study.image ? (
                  <img src={study.image} alt={study.title} loading="lazy" />
                ) : (
                  '📊'
                )}
              </div>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <div className="case-study-meta">
                <span className="badge">{study.company}</span>
                <span className="badge">{study.year}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="view-all-work">
          <Link to="/work" className="view-all-button">
            View All Work →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;