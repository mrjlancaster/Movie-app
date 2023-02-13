import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <span>
        <a href="/" className="logo">
          <span className="logo__movie">Movie</span>-
          <span className="logo__app">App</span>
        </a>
      </span>
      <div className="footer__social">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF className="footer_icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FiInstagram className="footer_icon" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <BsYoutube className="footer_icon" />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <AiOutlineTwitter className="footer_icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
