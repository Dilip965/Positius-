import "../Styles/footer.css"
import linkdine  from "../assets/linkdine.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
function Footer() {
    return (
      <>
        <section className="footer-main">
          <header className="footer-navbar">
            <div className="footer-navbar-container">
              <div className="footer-logo">
                <span className="footer-logo-icon">✶</span>{" "}
                <span className="logo-text">Positivus</span>
              </div>
              <nav className="footer-nav-links">
                <a href="pages/about-us.html">About us</a>
                <a href="pages/services.html">Services</a>
                <a href="pages/user-case.html">Use Cases</a>
                <a href="pages/Pricing.html">Pricing</a>
                <a href="pages/blog.html">Blog</a>
              </nav>
              <div className="footer-social-icons">
                <img src="photo/LINKDINE.png" alt="LinkedIn" />
                <img src="photo/FACEBOOK.png" alt="Facebook" />
                <img src="photo/TWITTER.png" alt="Twitter" />
              </div>
            </div>
          </header>
  
          {/* Contact Section */}
          <div className="footer-contact-section">
            <div className="contact-info">
              <p className="contact-title">Contact us:</p>
              <p>
                Email:{" "}
                <a href="mailto:info@positivus.com">info@positivus.com</a>
              </p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Email"
                className="email-input"
              />
              <button className="subscribe-button">Subscribe to news</button>
            </div>
          </div>
  
          <hr />
  
          {/* Privacy Section */}
          <div className="privacy">
            <h4>
              2024 Positivus All rights are Reserved{" "}
              <a href="#">Privacy Policy</a>
            </h4>
          </div>
        </section>
      </>
    );
  }
  
  export default Footer;
  