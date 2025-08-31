import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h1 className="contacts-header">Contact Me</h1>
      <div className="contacts-list-container">
        <a className="contact-link" href="mailto:fsu8@my.bcit.ca">
          <HiOutlineMail size={30} />
          fsu8@my.bcit.ca
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/fflora-su/"
          target="_blank"
        >
          <FaLinkedin style={{ paddingLeft: "1px" }} size={27} />
          LinkedIn
        </a>
      </div>
    </>
  );
};

export default Contact;
