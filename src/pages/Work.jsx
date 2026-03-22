import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data';

function Work() {
  return (
    <div className="work-page">
      <Helmet>
        {/* Primary SEO */}
        <title>SEO Case Studies | Matt Keller Digital Marketing</title>
        <meta
          name="description"
          content="Explore detailed SEO case studies showing measurable results: traffic growth, ranking improvements, and revenue increases for home services and legal industries."
        />
        <link rel="canonical" href="https://mattkellerdigital.com/work" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SEO Case Studies | Matt Keller Digital Marketing" />
        <meta
          property="og:description"
          content="Detailed SEO case studies with measurable results across home services and legal industries."
        />
        <meta property="og:url" content="https://mattkellerdigital.com/work" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SEO Case Studies | Matt Keller Digital Marketing" />
        <meta
          name="twitter:description"
          content="Real SEO results: traffic growth, ranking improvements, and measurable revenue increases."
        />
      </Helmet>
      <div className="work-header">
        <h1>My Work</h1>
        <p className="work-intro">
          I help businesses grow through strategic SEO. Here’s a selection of projects focused on technical improvements, content strategy, and driving measurable increases in organic traffic.
        </p>
      </div>

      <section className="case-studies-section">
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
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
      </section>
    </div>
  );
}

export default Work;