import { useParams, Link } from 'react-router-dom';
import { getCaseStudyById } from '../data';

function CaseStudy() {
  const { id } = useParams();
  const study = getCaseStudyById(id);

  if (!study) {
    return (
      <div className="case-study-detail">
        <h1>Case study not found</h1>
        <Link to="/" className="back-link">← Back to home</Link>
      </div>
    );
  }

  return (
    <div className="case-study-detail">
      <Link to="/" className="back-link">← Back to all work</Link>
      
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

      {/* Key Metrics */}
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
        {/* Overview */}
        <h2>Overview</h2>
        <p>{study.overview}</p>

        {/* Challenge */}
        <h2>The Challenge</h2>
        <p>{study.challenge}</p>

        {/* Approach */}
        <h2>My Approach</h2>
        <ul>
          {study.approach.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Results */}
        <h2>Results</h2>
        <ul>
          {study.results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Tools */}
        <h3>Tools & Technologies Used</h3>
        <p>{study.tools.join(' • ')}</p>
      </div>
    </div>
  );
}

export default CaseStudy;
