import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data';

function Work() {
  return (
    <div className="work-page">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
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