export const caseStudies = [
  {
    id: 'local-seo-jackson-ms',
    title: 'Local SEO Growth for Multi-Location Home Services Company',
    company: 'Home Services Company',
    year: '2026',
    description: 'Expanded local visibility and increased organic traffic by building a scalable service area SEO structure across the Jackson, MS market.',
    metaTitle: 'Local SEO Case Study – Jackson, MS | Matt Keller',
    metaDescription: 'Local SEO case study showing how I improved rankings, traffic, and visibility for a Jackson, MS home services company through technical SEO and content strategy.',
    image: '/hvac-techs.webp',
    metrics: {
      trafficGrowth: '+35%',
      clicks: '+121%',
      keywordGrowth: '5×'
    },

    overview: 'A multi-location HVAC, plumbing, and electrical company in the Jackson, Mississippi area wanted to expand their visibility in local search and capture more high-intent service queries.',

    challenge: 'The site had limited localized content and struggled to rank across the surrounding service areas. Most visibility was concentrated on a small number of pages.',

    approach: [
      'Built scalable parent/child service-area page structure',
      'Created optimized landing pages targeting high-intent local queries',
      'Strengthened internal linking between services and locations',
      'Improved on-page geographic signals',
      'Supported rollout with technical SEO fixes'
    ],

    results: [
      'Organic users increased from 6,731 to 9,112 (+35%) in a 90-day YoY comparison',
      'Google Search clicks increased from 2.33K to 5.16K (+121%)',
      'Expanded ranking keyword footprint from ~180 to ~900+',
      'Service-area pages began ranking across dozens of surrounding cities',
      'Improved engagement and reduced bounce rate from organic visitors'
    ],

    tools: ['Google Search Console', 'GA4', 'Screaming Frog', 'Semrush']
  },

  {
    id: 'local-seo-charlotte-nc',
    title: 'Doubling Organic Traffic for a Charlotte Home Services Company',
    company: 'HVAC, Plumbing & Electrical Contractor',
    year: '2026',
    description: 'Doubled organic traffic and expanded keyword visibility after rebuilding local SEO strategy for a Charlotte home services company.',
    metaTitle: 'Local SEO Case Study – Charlotte, NC | Matt Keller',
    metaDescription: 'Local SEO case study highlighting growth in rankings and organic traffic for a Charlotte home services company through technical SEO and targeted content strategy.',
    image: '/charlotte-nc.webp',

    metrics: {
      trafficGrowth: '+104%',
      clicks: '+131%',
      keywordGrowth: '5×'
    },

    overview:
      'A Charlotte-based HVAC, plumbing, and electrical company needed to recover organic performance after transitioning away from a previous agency. Despite strong demand across surrounding cities, the site had limited visibility for many high-intent local searches.',

    challenge:
      'The previous strategy failed to properly target nearby service areas and important local keywords. Key pages were missing, internal linking was weak, and geographic signals were inconsistent across the site.',

    approach: [
      'Developed a structured service-area page strategy targeting surrounding cities',
      'Optimized core service pages for high-intent local queries',
      'Improved internal linking between services and service-area pages',
      'Strengthened local SEO signals and on-page relevance',
      'Worked with private-equity stakeholders to align reporting and growth strategy'
    ],

    results: [
      'Organic sessions increased from 3,007 to 6,140 (+104%) in a 90-day YoY comparison',
      'Google Search clicks increased from 2.81K to 6.49K (+131%)',
      'Ranking keyword footprint expanded from ~1K to ~6K',
      'Improved visibility across surrounding service areas in the Charlotte market',
      'Engaged sessions increased by 51%'
    ],

    tools: [
      'Google Search Console',
      'Google Analytics 4',
      'Screaming Frog',
      'Semrush'
    ]
  },

  {
    id: 'lawyer-seo-philadelphia-pa',
    title: 'Scaling Organic Growth for a Philadelphia Immigration Law Firm',
    company: 'Immigration Law Firm',
    year: '2025-2026',
    description: 'Restructured site architecture and implemented pillar-cluster content strategy, driving consistent YoY growth in organic visibility and conversions.',
    metaTitle: 'Lawyer SEO Case Study – Philadelphia | Matt Keller',
    metaDescription: 'SEO case study for a Philadelphia immigration law firm focused on improving rankings, organic visibility, and conversions through technical SEO and content strategy.',
    image: '/lawyer.webp',
    metrics: {
      clicks: '+86%',
      impressions: '+289%',
      keywordGrowth: '+300%'
    },

    overview: 'A Philadelphia-based immigration law firm needed to improve organic performance and compete more effectively for high-intent immigration legal queries across the region.',

    challenge: 'The site suffered from technical SEO issues, unclear URL structure, and scattered content that failed to establish topical authority. Visibility was limited despite strong local demand for immigration legal services.',

    approach: [
      'Conducted comprehensive technical SEO audit and resolved critical errors',
      'Restructured URLs for clearer hierarchy and improved crawlability',
      'Implemented pillar-cluster content strategy covering all immigration practice areas',
      'Optimized content for AI overviews and generative search engines (AEO/GEO)',
      'Strengthened internal linking between pillar pages and supporting cluster content',
      'Improved on-page SEO signals and local relevance for Philadelphia market'
    ],

    results: [
      'Google Search clicks increased 86% year-over-year (1.37K to 2.54K)',
      'Impressions grew 289% YoY (121K to 469K)',
      'Organic sessions increased 60% with 38% growth in conversions',
      'Total ranking keywords expanded from ~400 to ~1,500+',
      'High-value keywords (positions 1-20) increased to 350+',
      'Improved average position from 25 to 11.8 over 3-month period',
      'Consistent upward trajectory in organic visibility over 24 months'
    ],

    tools: ['Google Search Console', 'Google Analytics 4', 'Semrush', 'Screaming Frog']
  }
];

// Helper function to get case study by ID
export const getCaseStudyById = (id) => {
  return caseStudies.find(study => study.id === id);
};
