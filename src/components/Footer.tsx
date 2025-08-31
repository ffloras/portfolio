import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-name">Flora Su</p>
      <div className="footer-link-container">
        <a href="mailto:fsu8@my.bcit.ca" className="footer-icon-outline">
          <HiOutlineMail size={20} color="#9a6626ff" />
        </a>
        <a
          href="https://www.linkedin.com/in/fflora-su/"
          target="_blank"
          className="footer-icon-outline"
        >
          <FaLinkedinIn size={18} color="#9a6626ff" />
        </a>
        <a
          href="https://github.com/ffloras/portfolio"
          target="_blank"
          className="footer-icon-outline"
        >
          <FaGithub size={22} color="#9a6626ff" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
