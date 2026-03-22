import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { getCaseStudyById } from '../data';

function CaseStudy() {
  const { id } = useParams();
  const study = getCaseStudyById(id);

  if (!study) {
    return (
      <div className="case-study-detail">
        <Helmet>
          <title>Case Study Not Found | Matt Keller</title>
          <meta
            name="description"
            content="The case study you are looking for could not be found."
          />
          <link rel="canonical" href="https://mattkellerdigital.com/work" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Case Study Not Found | Matt Keller" />
          <meta
            property="og:description"
            content="The case study you are looking for could not be found."
          />
          <meta property="og:url" content="https://mattkellerdigital.com/work" />
          <meta
            property="og:image"
            content="https://mattkellerdigital.com/og-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Case Study Not Found | Matt Keller" />
          <meta
            name="twitter:description"
            content="The case study you are looking for could not be found."
          />
          <meta
            name="twitter:image"
            content="https://mattkellerdigital.com/og-image.jpg"
          />
        </Helmet>

        <h1>Case study not found</h1>
        <Link to="/work" className="back-link">← Back to all work</Link>
      </div>
    );
  }

  const canonicalUrl = `https://mattkellerdigital.com/work/${study.id}`;
  const pageTitle = study.metaTitle || `${study.title} | Matt Keller`;
  const pageDescription =
    study.metaDescription ||
    study.description ||
    `${study.title} case study by Matt Keller, highlighting SEO strategy and organic growth results.`;

  const ogImage = study.image
    ? `https://mattkellerdigital.com${study.image}`
    : 'https://mattkellerdigital.com/og-image.jpg';

  return (
    <div className="case-study-detail">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Link to="/work" className="back-link">← Back to all work</Link>

      <div className="case-study-header">
        <h1>{study.title}</h1>
        <div className="meta">
          <span>{study.company}</span>
          <span>•</span>
          <span>{study.year}</span>
        </div>
      </div>

      {study.image && (
        <div className="case-study-hero-image">
          <img src={study.image} alt={study.title} />
        </div>
      )}

      <div className="metrics-grid">
        {Object.entries(study.metrics).map(([key, value]) => (
          <div key={key} className="metric-card">
            <div className="metric-value">{value}</div>
            <div className="metric-label">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      <div className="case-study-content">
        <h2>Overview</h2>
        <p>{study.overview}</p>

        <h2>The Challenge</h2>
        <p>{study.challenge}</p>

        <h2>My Approach</h2>
        <ul>
          {study.approach.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Results</h2>
        <ul>
          {study.results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Tools & Technologies Used</h3>
        <p>{study.tools.join(' • ')}</p>
      </div>
    </div>
  );
}

export default CaseStudy;

