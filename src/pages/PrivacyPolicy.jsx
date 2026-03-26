import { Helmet } from 'react-helmet-async';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Helmet>
        {/* Primary SEO */}
        <title>Privacy Policy | Matt Keller Digital</title>
        <meta
          name="description"
          content="Privacy policy for mattkellerdigital.com explaining how data is collected and used."
        />
        <link rel="canonical" href="https://mattkellerdigital.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="legal-subtitle">mattkellerdigital.com</p>
        <p className="legal-date"><em>Last Updated: March 26, 2026</em></p>

        <p>
          This Privacy Policy explains how I, Matt Keller, collect, use, and protect information in connection with my personal portfolio website at mattkellerdigital.com (the "Site"). I am committed to handling any data responsibly and transparently.
        </p>

        <p>
          This policy is designed to comply with applicable privacy laws including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), and other relevant international privacy frameworks.
        </p>

        <h2>1. Who I Am</h2>
        <p>The Site is operated solely by:</p>
        <ul>
          <li>Name: Matt Keller</li>
          <li>Website: mattkellerdigital.com</li>
          <li>Nature: Personal portfolio website — not a business or commercial entity</li>
        </ul>
        <p>For questions about this policy, you may contact me at: <a href="mailto:contact@mattkellerdigital.com">contact@mattkellerdigital.com</a></p>

        <h2>2. Personal Information: What I Do Not Collect</h2>
        <p>
          This Site does not collect, store, or process any personally identifiable information (PII) such as your name, email address, phone number, or mailing address. There are no contact forms, user accounts, subscriptions, comment sections, or any mechanism through which you would submit personal data to me directly.
        </p>
        <p>
          I do not run advertising of any kind on this Site, and I do not sell, share, or monetize visitor data.
        </p>

        <h2>3. Analytics and Third-Party Services</h2>
        <p>
          I use a small set of industry-standard tools to understand how the Site is used and to keep it running reliably. These tools may collect anonymous or pseudonymous technical data. Each is described below.
        </p>

        <h3>3.1 Google Analytics & Google Tag Manager</h3>
        <p>
          I use Google Analytics (via Google Tag Manager) to collect aggregated, anonymous data about how visitors use the Site. This may include:
        </p>
        <ul>
          <li>Pages visited and time spent on each page</li>
          <li>General geographic location (country/region level only — not precise location)</li>
          <li>Browser type, device type, and operating system</li>
          <li>Referral source (e.g., which search engine or website directed you here)</li>
          <li>Anonymized IP addresses (IP anonymization is enabled)</li>
        </ul>
        <p>
          Google Tag Manager manages when and how these scripts load. Analytics scripts are only fired after you have provided explicit consent via the cookie consent mechanism described in Section 4. No data is sent to Google Analytics prior to your consent.
        </p>
        <p>
          Google's privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>. You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
        </p>

        <h3>3.2 Google Search Console</h3>
        <p>
          I use Google Search Console to monitor the Site's performance in Google Search results (e.g., which search queries lead visitors to the Site, indexing status, and technical errors). This service operates on the server side using aggregated, anonymized data provided by Google. It does not place cookies on your device and does not collect personal information from you directly.
        </p>

        <h3>3.3 Microsoft Bing Webmaster Tools</h3>
        <p>
          Similarly, I use Microsoft Bing Webmaster Tools to understand the Site's visibility in Bing search results. Like Google Search Console, this operates on aggregated, server-side data and does not directly collect personal information from you.
        </p>
        <p>
          Microsoft's privacy policy can be found at <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com</a>.
        </p>

        <h3>3.4 Cloudflare</h3>
        <p>
          The Site uses Cloudflare as its DNS provider and content delivery network (CDN). Cloudflare sits between your browser and the Site's servers, providing security (DDoS protection, threat mitigation) and performance (caching and fast delivery). In doing so, Cloudflare may process your IP address and other connection metadata as part of its infrastructure-level services. Cloudflare acts as a data processor on my behalf and is subject to its own privacy obligations.
        </p>
        <p>
          Cloudflare's privacy policy is available at <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/privacypolicy/</a>.
        </p>

        <h3>3.5 Vercel</h3>
        <p>
          The Site is hosted on Vercel, a cloud hosting and deployment platform. Vercel may collect server-side logs including IP addresses, request paths, and timestamps for the purpose of operating and securing the hosting infrastructure. This data is handled by Vercel in accordance with its privacy policy and is not used by me for tracking or marketing purposes.
        </p>
        <p>
          Vercel's privacy policy is available at <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>.
        </p>

        <h2>4. Cookies and Consent Management</h2>
        
        <h3>4.1 What Are Cookies?</h3>
        <p>
          Cookies are small text files placed on your device by websites you visit. They are widely used to make websites function, improve user experience, and provide analytical information.
        </p>

        <h3>4.2 CookieYes — Consent Management Platform</h3>
        <p>
          This Site uses CookieYes as its consent management platform (CMP). When you first visit the Site, you will be presented with a cookie consent banner. Analytics scripts (including Google Analytics via Google Tag Manager) are blocked from running until you have made an explicit consent choice. This is how the Site implements consent-based script initialization.
        </p>
        <p>Specifically:</p>
        <ul>
          <li>Analytics cookies and scripts fire only after you grant consent.</li>
          <li>If you decline, no analytics data is collected and no analytics cookies are set.</li>
          <li>Your consent preference is stored in a cookie on your device so you are not asked again on subsequent visits.</li>
          <li>You can change your consent choice at any time by clearing your cookies or using the cookie preference control on the Site.</li>
        </ul>

        <h3>4.3 Types of Cookies Used</h3>
        <p>The cookies potentially set on the Site fall into these categories:</p>
        <ul>
          <li><strong>Strictly Necessary:</strong> The cookie consent preference cookie set by CookieYes. This is exempt from consent requirements as it is necessary to record your privacy choice.</li>
          <li><strong>Analytics (consent required):</strong> Cookies set by Google Analytics to distinguish users and track session data anonymously. These are only set after you provide consent.</li>
          <li>No advertising, tracking, or social media cookies are present on this Site.</li>
        </ul>

        <h2>5. Legal Bases for Processing (GDPR)</h2>
        <p>
          For visitors in the European Economic Area (EEA), United Kingdom, and Switzerland, where the GDPR or equivalent laws apply, the legal bases for any data processing are as follows:
        </p>
        <ul>
          <li><strong>Consent (Article 6(1)(a) GDPR):</strong> Analytics data is processed only based on your freely given, specific, and informed consent via the cookie consent banner. You may withdraw this consent at any time.</li>
          <li><strong>Legitimate Interests (Article 6(1)(f) GDPR):</strong> Infrastructure-level processing by Cloudflare and Vercel (e.g., IP logging for security and uptime) is carried out on the basis of legitimate interests in maintaining a secure and functional website. These interests are not overridden by your fundamental rights, given the limited and technical nature of the data involved.</li>
        </ul>

        <h2>6. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have various rights regarding data about you. Because I do not collect personal information directly, most of these rights are limited in practical scope for this Site. Nonetheless, I respect and honor them where applicable.
        </p>

        <h3>6.1 Rights Under GDPR (EEA, UK, Switzerland)</h3>
        <ul>
          <li>Right to access — request information about what data (if any) is held about you.</li>
          <li>Right to rectification — request correction of inaccurate data.</li>
          <li>Right to erasure — request deletion of data about you.</li>
          <li>Right to restriction — request that processing of your data be limited.</li>
          <li>Right to data portability — request a copy of your data in a portable format.</li>
          <li>Right to object — object to processing based on legitimate interests.</li>
          <li>Right to withdraw consent — withdraw analytics consent at any time without detriment, by clearing cookies or using the cookie consent control on the Site.</li>
          <li>Right to lodge a complaint — you may lodge a complaint with your local supervisory authority (e.g., the ICO in the UK, or your national data protection authority in the EU).</li>
        </ul>

        <h3>6.2 Rights Under CCPA/CPRA (California Residents)</h3>
        <p>California residents have rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA):</p>
        <ul>
          <li>Right to know — the categories and specific pieces of personal information collected about you (if any).</li>
          <li>Right to delete — request deletion of personal information (subject to exceptions).</li>
          <li>Right to correct — request correction of inaccurate personal information.</li>
          <li>Right to opt-out of sale or sharing — I do not sell or share personal information. This right is therefore not applicable, but I explicitly confirm: I do not sell personal data.</li>
          <li>Right to non-discrimination — you will not receive discriminatory treatment for exercising your privacy rights.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact me at <a href="mailto:contact@mattkellerdigital.com">contact@mattkellerdigital.com</a>. I will respond to verifiable requests within the timeframe required by applicable law.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          I do not store personal data on my own servers. Retention of analytics data within Google Analytics is governed by the retention settings I have configured (currently set to the minimum available retention period) and by Google's data policies. Server-side logs maintained by Vercel and Cloudflare are retained according to their respective policies.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          The third-party services used by this Site (Google, Microsoft, Cloudflare, Vercel) may process data in the United States or other countries outside your jurisdiction. These companies participate in or comply with frameworks such as the EU-U.S. Data Privacy Framework, Standard Contractual Clauses (SCCs), or equivalent mechanisms to ensure that cross-border transfers are handled lawfully and with appropriate safeguards. Please refer to each provider's privacy policy for details.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          This Site is not directed at children under the age of 13 (or 16 in certain jurisdictions), and I do not knowingly collect any personal information from children. If you believe a child has inadvertently provided personal information, please contact me and I will take steps to delete it.
        </p>

        <h2>10. External Links</h2>
        <p>
          The Site may contain links to external websites (e.g., GitHub, LinkedIn, or other platforms). I am not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          I may update this Privacy Policy from time to time to reflect changes in tools, services, or applicable law. When I do, I will update the "Last Updated" date at the top of this page. Continued use of the Site after any changes constitutes your acknowledgment of the updated policy.
        </p>

        <h2>12. Contact</h2>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or my data practices, please reach out:</p>
        <ul>
          <li><strong>Matt Keller</strong></li>
          <li>Email: <a href="mailto:contact@mattkellerdigital.com">contact@mattkellerdigital.com</a></li>
          <li>Website: <a href="https://mattkellerdigital.com">mattkellerdigital.com</a></li>
        </ul>

        <p className="legal-footer">
          <em>This Privacy Policy was last updated on March 26, 2026. It applies to all visitors of mattkellerdigital.com worldwide.</em>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;