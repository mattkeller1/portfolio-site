import { Helmet } from 'react-helmet-async';

function About() {
  // Your 12 photos for the 3x4 grid
  const photos = [
    "/about/portland-headlight-1.webp",
    "/about/sea-isle-sunrise-1.webp",
    "/about/sea-isle-bay-sunset-1.webp",
    "/about/boston_gov_building-1.webp",
    "/about/acadia-waves-1.webp",
    "/about/jim-thorpe-1.webp",
    "/about/new-hope-foliage-1.webp",
    "/about/new-hope-dog-in-car-1.webp",
    "/about/boston-graffiti-cropped-1.webp",
    "/about/sea-isle-bench-1.webp",
    "/about/vail-trip-1.webp",
    "/about/adirondacks-hike-1.webp",
  ];

  return (
    <div className="about-page">
      <Helmet>
        {/* Primary SEO */}
        <title>About Matt Keller | Philadelphia Digital Marketer</title>
        <meta
          name="description"
          content="Philadelphia-based digital marketer specializing in technical SEO, content strategy, and analytics. Learn about my approach to driving organic growth."
        />
        <link rel="canonical" href="https://mattkellerdigital.com/about" />
        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="About Matt Keller | Philadelphia Digital Marketer" />
        <meta
          property="og:description"
          content="Philadelphia-based digital marketer specializing in technical SEO, content strategy, and analytics."
        />
        <meta property="og:url" content="https://mattkellerdigital.com/about" />
        <meta property="og:image" content="https://mattkellerdigital.com/about/about-photo-cropped-1.webp" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Matt Keller | Philadelphia Digital Marketer" />
        <meta
          name="twitter:description"
          content="Digital marketing specialist based in Philadelphia. Driving organic growth through data-driven strategies."
        />
        <meta name="twitter:image" content="https://mattkellerdigital.com/about/about-photo-cropped-1.webp" />
      </Helmet>
      <div className="about-container">
        <section className="about-hero">
          <div className="about-photo">
            {/* Eager load - this is above the fold */}
            <img
              src="/about/about-photo-cropped-1.webp"
              alt="Matt Keller headshot"
              width="520"
              height="520"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="about-intro">
            <h1 className="about-title">About Me</h1>
            <p className="about-lede">
              I'm a digital marketer based in Philadelphia focused on helping businesses grow through search.
              My work sits at the intersection of technical SEO, content strategy, and analytics.
            </p>

            <div className="about-columns">
              <div className="about-col">
                <h3>Day to day</h3>
                <p>
                  I spend most of my time diagnosing technical SEO issues, building SEO-driven content strategies, and
                  turning data into clear priorities. I enjoy work that blends abstract thinking with
                  practical execution.
                </p>
              </div>

              <div className="about-col">
                <h3>Outside of work</h3>
                <p>
                  Outside of marketing, I'm into photography, reading, and cooking. I also love traveling, my favorite
                  destinations so far have been Colorado and Maine! I'm always looking to learn something new, and will happily show up to any trivia night.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-bring">
          <h2 className="about-section-title">What I Bring</h2>

          <div className="bring-grid">
            <div className="bring-card">
              <h3>Analytical thinking</h3>
              <p>
                I enjoy digging into messy problems, spotting patterns, and translating insights into an
                actionable plan.
              </p>
            </div>

            <div className="bring-card">
              <h3>Communication</h3>
              <p>
                SEO touches paid search, dev, ops, and leadership. I focus on making priorities easy to
                understand and easy to act on.
              </p>
            </div>

            <div className="bring-card">
              <h3>Curiosity</h3>
              <p>
                Search changes constantly. I like testing, learning, and improving systems as the landscape
                shifts.
              </p>
            </div>

            <div className="bring-card">
              <h3>Collaboration</h3>
              <p>
                I'm a team player who values good communication, clear expectations, and collaborative problem-solving.
              </p>
            </div>
          </div>
        </section>

        <section className="about-photos">
          <div className="about-photos-head">
            <h2 className="about-section-title">Photography & Travel</h2>
            <p className="about-subtitle">
              A handful of photos from recent travels and exploring around home!
            </p>
          </div>

          {/* Static 3x4 Grid with Lazy Loading */}
          <div className="photo-grid">
            {photos.map((src, idx) => (
              <div className="photo-grid-item" key={idx}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="1500"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="about-connect">
          <h2 className="about-section-title">Let's connect</h2>
          <p className="about-connect-text">
            If you want to chat SEO, analytics, or anything creative, feel free to reach out via{" "}
            <a href="mailto:mdjkeller@gmail.com">email</a>{" "}
            or connect with me on{" "}
            <a href="https://www.linkedin.com/in/matthew-d-keller/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;