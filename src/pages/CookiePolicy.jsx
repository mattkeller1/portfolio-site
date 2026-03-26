import { Helmet } from 'react-helmet-async';

function CookiePolicy() {
  return (
    <div className="legal-page">
      <Helmet>
        {/* Primary SEO */}
        <title>Cookie Policy | Matt Keller Digital</title>
        <meta
          name="description"
          content="Cookie policy for mattkellerdigital.com explaining how cookies are used on the site."
        />
        <link rel="canonical" href="https://mattkellerdigital.com/cookie-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="legal-container">
        <h1>Cookie Policy</h1>
        <p className="legal-subtitle">mattkellerdigital.com</p>
        <p className="legal-date"><em>Effective Date: March 26, 2026</em></p>
        <p className="legal-date"><em>Last Updated: March 26, 2026</em></p>

        <p>
          This Cookie Policy explains how I, Matt Keller, use cookies and similar tracking technologies on mattkellerdigital.com (the "Site"). It should be read alongside my Privacy Policy, which provides broader information about how data is handled on this Site.
        </p>

        <p>
          This Site is my personal portfolio — not a business. I do not run advertising, and I do not collect or sell personal information. Cookies on this Site are limited to what is strictly necessary for operation and anonymous analytics (with your consent).
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They allow websites to remember information about your visit — such as your preferences or session state — and to collect anonymous usage data.
        </p>

        <p>Cookies may be:</p>
        <ul>
          <li><strong>First-party cookies</strong> — set directly by this Site.</li>
          <li><strong>Third-party cookies</strong> — set by external service providers whose scripts run on the Site (e.g., Google Analytics).</li>
        </ul>

        <p>Cookies may also be session-based (deleted when you close your browser) or persistent (retained for a defined period).</p>

        <h2>2. Why This Site Uses Cookies</h2>
        <p>This Site uses cookies for two purposes only:</p>
        <ul>
          <li>To record your cookie consent preference (strictly necessary), so you are not shown the consent banner on every visit.</li>
          <li>To collect anonymous analytics data about how the Site is used (analytics), but only after you have given your explicit consent.</li>
        </ul>

        <p><strong>This Site does not use functional cookies, marketing cookies, advertising cookies, or social media tracking cookies.</strong></p>

        <h2>3. Cookie Categories</h2>

        <h3>3.1 Strictly Necessary Cookies</h3>
        <p>
          These cookies are essential for the Site to function and cannot be switched off. They do not track you for marketing purposes and do not require your consent under applicable law. On this Site, the only strictly necessary cookie is the one set by CookieYes to store your consent preferences.
        </p>

        <h3>3.2 Analytics Cookies</h3>
        <p>
          Analytics cookies help me understand how visitors interact with the Site by collecting anonymous, aggregated data. On this Site, analytics cookies are set by Google Analytics. These cookies are only activated after you provide consent via the cookie banner. If you decline, no analytics cookies are set and no analytics data is collected.
        </p>

        <h2>4. Cookie List</h2>
        <p>
          The following table lists the cookies currently in use on this Site. This list is maintained based on regular cookie audits. If you notice a discrepancy, please contact me.
        </p>

        <div className="cookie-table-wrapper">
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Category</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookieyes-consent</td>
                <td>CookieYes</td>
                <td>Stores the user's cookie consent preferences</td>
                <td>Necessary</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>_ga</td>
                <td>Google Analytics</td>
                <td>Registers a unique ID to distinguish visitors and generate statistical data on site usage</td>
                <td>Analytics</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics</td>
                <td>Used to persist session state across page requests</td>
                <td>Analytics</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics</td>
                <td>Registers a unique ID to track a visitor's session for a 24-hour period</td>
                <td>Analytics</td>
                <td>24 hours</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>Google Analytics</td>
                <td>Used to throttle request rate to Google Analytics</td>
                <td>Analytics</td>
                <td>1 minute</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <em>Note: Analytics cookies (_ga, _ga_*, _gid, _gat) are only set after you have consented via the cookie banner. The cookieyes-consent cookie is set immediately and is strictly necessary to record your choice.</em>
        </p>

        <h2>5. Cookie Duration</h2>
        <p>Cookies on this Site fall into two duration types:</p>
        <ul>
          <li><strong>Session cookies</strong> — expire automatically when you close your browser.</li>
          <li><strong>Persistent cookies</strong> — remain on your device for a defined period (see the expiry column in Section 4 above).</li>
        </ul>

        <h2>6. Third-Party Cookies and Tracking Technologies</h2>
        <p>
          The only third-party service that sets cookies on this Site is Google (via Google Analytics and Google Tag Manager). Google processes data under its own privacy policy. I have configured Google Analytics with IP anonymization enabled, and analytics scripts only run after your consent is obtained.
        </p>
        <p>
          Google's privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
        </p>
        <p>
          Other services used by this Site — Cloudflare, Vercel, Google Search Console, and Microsoft Bing Webmaster Tools — operate at the infrastructure or server level and do not set cookies on your device directly.
        </p>

        <h2>7. How to Manage Cookies</h2>

        <h3>7.1 Cookie Consent Banner</h3>
        <p>
          When you first visit the Site, a cookie consent banner (powered by CookieYes) will appear. You can accept or decline analytics cookies at that time. You can change your preferences at any time by clicking the "Cookie Preferences" link at the bottom of the page or by clearing your browser cookies.
        </p>

        <h3>7.2 Browser Settings</h3>
        <p>Most browsers allow you to control cookies through their settings. You can typically:</p>
        <ul>
          <li>View and delete existing cookies</li>
          <li>Block all cookies or cookies from specific sites</li>
          <li>Set preferences for certain types of cookies</li>
        </ul>
        <p>
          Note that blocking all cookies may affect the functionality of other websites you visit. On this Site, blocking cookies will simply prevent analytics data from being collected — it will not affect your ability to view or use the Site.
        </p>

        <h3>7.3 Google Analytics Opt-Out</h3>
        <p>
          You can opt out of Google Analytics tracking across all websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
        </p>

        <h2>8. Updates to This Cookie Policy</h2>
        <p>
          I may update this Cookie Policy from time to time to reflect changes in the cookies used, the services I rely on, or applicable legal requirements. When changes are made, the "Last Updated" date at the top of this page will be revised. I encourage you to review this policy periodically.
        </p>

        <h2>9. Contact</h2>
        <p>If you have any questions about this Cookie Policy, please get in touch:</p>
        <ul>
          <li><strong>Matt Keller</strong></li>
          <li>Email: <a href="mailto:contact@mattkellerdigital.com">contact@mattkellerdigital.com</a></li>
          <li>Website: <a href="https://mattkellerdigital.com">mattkellerdigital.com</a></li>
        </ul>

        <p className="legal-footer">
          <em>This Cookie Policy was last updated on March 26, 2026. It applies to all visitors of mattkellerdigital.com worldwide.</em>
        </p>
      </div>
    </div>
  );
}

export default CookiePolicy;