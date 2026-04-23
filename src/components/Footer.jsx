import { FaHeart } from 'react-icons/fa';
import './Footer.css';
import { profile } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            © {currentYear} {profile.name}. Hecho con <FaHeart className="heart" /> usando React
          </p>
          <p>Diseñado y desarrollado por {profile.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
