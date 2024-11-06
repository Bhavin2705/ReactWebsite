import styles from "./footer.module.css";
import logoIcon from "../../assets/image.png"; // Make sure to update the path to the logo if necessary
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      {/* Optional Background Image */}
      <div className={styles.footer_image}>
        <h2>
          Follow us on
          <a href="https://www.instagram.com/" target="_blank">Instagram</a>
        </h2>
      </div>
      <div className={styles.footer_content}>
        {/* Footer Column 1: Logo and Tagline */}
        <div className={styles.logo_holder}>
          <a href="#" className={styles.footer__logo}>
            <img src={logoIcon} alt="Energifit logo" />
          </a>
          <p className={styles.footer__tagline}>

          </p>
        </div>

        {/* Footer Column 2: Contact Info */}
        <div>
          <h4>Contact Us</h4><br />
          <ul className={styles.footer__contact}>
            <li>
              <a href="tel:+919876543216">
                <i className="ri-phone-line"></i> +91 9876543216
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps">
                <i className="ri-map-pin-line"></i> New Delhi, India
              </a>
            </li>
            <li>
              <a href="mailto:info@energifit.com">
                <i className="ri-mail-line"></i> info@energifit.com
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Column 3: Quick Links */}
        <div>
          <h4>Quick Links</h4><br />
          <ul className={styles.footer__links}>
            <li><a href="" onClick={() => navigate("/")}>Home</a></li>
            <li><a href="" onClick={() => navigate("/about")}>About</a></li>
            <li><a href="" onClick={() => navigate("/programs")}>Programs</a></li>
            <li><a href="" onClick={() => navigate("/trainers")}>Trainers</a></li>
            <li><a href="" onClick={() => navigate("/contact")}>Contact</a></li>
          </ul>
        </div>

        {/* Footer Column 4: Social Media Links */}
        <div>
          <h4>Follow Us</h4><br />
          <ul className={styles.footer__social_links}>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className={styles.footer__bar}>
        Copyright © 2024 Energifit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
