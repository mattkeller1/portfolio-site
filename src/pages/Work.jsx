import { Link } from 'react-router-dom';
import { caseStudies } from '../data';

function Work() {
  return (
    <div className="work-page">
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