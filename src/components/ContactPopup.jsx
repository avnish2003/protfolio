import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPopup.css";

const ContactPopup = ({ isOpen, onClose }) => {

  const formRef = useRef();
  const popupRef = useRef();

  const [loading, setLoading] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => onClose();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onClose]);

  // Close on outside click
  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9upxscp",          // ✅ YOUR SERVICE ID
        "template_7rgst09",         // 🔴 REPLACE THIS
        formRef.current,
        "HqtRZlPGCDjG-tF8Z"           // 🔴 REPLACE THIS
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
          formRef.current.reset();
          setLoading(false);
          onClose();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error);
          setLoading(false);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-box" ref={popupRef}>

        <span className="close-btn" onClick={onClose}>×</span>

        <h2>Let's Work Together</h2>

        <form ref={formRef} onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactPopup;