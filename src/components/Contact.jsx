import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import ContactPopup from "../components/ContactPopup";

const Contact = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section className="contact-section">

        <div className="contact-top">
          <h2>Let’s Connect There</h2>

          <button 
            className="hire-now-btn"
            onClick={() => setOpenForm(true)}
          >
            <span className="arrow">»</span> Hire Me Now!
          </button>
        </div>

        <div className="divider"></div>

        <div className="contact-details">
          <p><strong>Phone:</strong> +91 88378 75645</p>
          <p><strong>Email:</strong> shriavnish333@gmail.com</p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/avnish-h-79059a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>

            <a href="https://github.com/avnish2003" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

      </section>

      <ContactPopup 
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </>
  );
};

export default Contact;