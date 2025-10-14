import { Link } from 'react-router-dom';
import { theme } from '../config/theme';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section - Left */}
        <div className="footer-section footer-logo-section">
          <img src={theme.logoDark} alt={theme.logoAlt} className="footer-logo" />
        </div>

        {/* Navigation Links - Middle */}
        <div className="footer-section footer-nav-section">
          <nav className="footer-nav">
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Shop</Link>
          </nav>
        </div>

        {/* Newsletter & Connect Section - Right */}
        <div className="footer-section footer-connect-section">
          {/* Newsletter Signup */}
          <div className="newsletter-form">
            <form role="form">
              <label htmlFor="footerEmailSignUp">Sign up for the newsletter</label>
              <input
                type="email"
                id="footerEmailSignUp"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="form-control"
              />
              <button type="submit" className="btn btn-primary newsletter-btn">Subscribe to MarkJPetersonArt</button>
            </form>
          </div>

          {/* Social Links */}
          <div className="social-links-section">
            <h2>Follow</h2>
            <ul className="social-links">
              {theme.social.instagram && (
                <li>
                  <a href={theme.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                      <path fill="currentColor" fillRule="evenodd" d="M13.268 3.73a.96.96 0 1 1-1.921-.001.96.96 0 0 1 1.921 0Zm-5.234 6.937a2.668 2.668 0 1 1-.001-5.335 2.668 2.668 0 0 1 0 5.335Zm0-6.775A4.11 4.11 0 0 0 3.923 8a4.11 4.11 0 0 0 4.11 4.108A4.11 4.11 0 0 0 12.146 8a4.11 4.11 0 0 0-4.111-4.108Zm6.516 7.34c-.006.508-.099 1.01-.276 1.486a2.65 2.65 0 0 1-1.519 1.519 4.446 4.446 0 0 1-1.486.275c-.844.039-1.097.047-3.235.047s-2.39-.008-3.235-.047a4.446 4.446 0 0 1-1.486-.275 2.484 2.484 0 0 1-.92-.599 2.477 2.477 0 0 1-.6-.92 4.422 4.422 0 0 1-.276-1.485C1.48 10.39 1.471 10.136 1.471 8s.008-2.39.046-3.233c.007-.507.1-1.01.276-1.485.128-.348.333-.662.6-.92.257-.265.572-.47.92-.598.475-.177.978-.27 1.486-.275.844-.04 1.097-.047 3.235-.047s2.391.008 3.235.047c.508.005 1.01.098 1.486.275.348.128.662.333.921.598.266.258.47.572.598.92.177.475.27.978.276 1.485.04.844.047 1.097.047 3.233s-.008 2.39-.047 3.233Zm1.441-6.53a5.87 5.87 0 0 0-.372-1.942 3.918 3.918 0 0 0-.923-1.417A3.915 3.915 0 0 0 13.278.42 5.878 5.878 0 0 0 11.334.05C10.48.009 10.208 0 8.034 0S5.587.01 4.733.049A5.878 5.878 0 0 0 2.79.42a3.915 3.915 0 0 0-1.418.923c-.407.4-.722.883-.924 1.417a5.887 5.887 0 0 0-.372 1.942C.038 5.555.028 5.827.028 8s.01 2.445.048 3.299c.014.663.14 1.32.372 1.941.202.535.517 1.018.924 1.418.4.406.884.722 1.418.922a5.863 5.863 0 0 0 1.943.372c.854.039 1.127.048 3.3.048 2.175 0 2.447-.009 3.301-.048a5.863 5.863 0 0 0 1.944-.372 4.092 4.092 0 0 0 2.341-2.34 5.866 5.866 0 0 0 .372-1.941c.039-.854.048-1.126.048-3.299s-.01-2.445-.048-3.298Z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </li>
              )}
              {theme.social.facebook && (
                <li>
                  <a href={theme.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="none">
                      <path fill="currentColor" fillRule="evenodd" d="M9.005 2.781H6.432c-.304 0-.643.397-.643.922v1.834h3.217L8.52 8.15H5.79V16H2.753V8.151H0V5.537h2.754V3.999C2.754 1.793 4.304 0 6.432 0h2.573v2.781Z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </li>
              )}
              {theme.social.pinterest && (
                <li>
                  <a href={theme.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Visit our Pinterest">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" fill="none">
                      <path fill="currentColor" fillRule="evenodd" d="M5.84 11.243c-.474 2.34-1.05 4.585-2.763 5.757-.527-3.537.775-6.194 1.382-9.014-1.033-1.64.124-4.94 2.3-4.127 2.68 1-2.32 6.096 1.036 6.734 3.503.664 4.934-5.738 2.76-7.82-3.137-3.006-9.135-.07-8.397 4.235.18 1.053 1.33 1.372.46 2.824C.61 9.412.01 7.916.089 5.922.211 2.658 3.192.374 6.183.057c3.783-.4 7.333 1.312 7.824 4.67.551 3.792-1.707 7.899-5.753 7.604-1.097-.082-1.556-.595-2.415-1.088Z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {theme.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
