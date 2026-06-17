import {FaClipboardList, FaPhone, FaClock, FaExternalLinkAlt, FaGlobe, FaEnvelope } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeCIk3ZpMKoL1ptCCJYABHB0hZdVHUxrN3UVlQVo2WOIKyX8A/viewform?usp=publish-editor";

export default function Contact() {
    return (
    <div className="contact-page">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact-hero fade-anim">
        <div className="pulse-icon">
          <FaGlobe size={26} />
        </div>
        <h1>Get in touch</h1>
        <p>
          We'd love to hear about your travel plans. Fill out the quick form below
          and our team will reach out shortly.
        </p>
      </div>

      <div className="contact-card fade-anim delay-1">
        <FaClipboardList size={28} />
        <h2>Send us a message</h2>
        <p>Tap below to open our contact form in a new tab. It takes less than a minute.</p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Open contact form <FaExternalLinkAlt size={14} />
        </a>
      </div>

      <div className="contact-info fade-anim delay-2">
        <div className="info-row">
          <FaPhone size={18} />
          <div>
            <p className="info-label">Call us</p>
            <p className="info-value">+91 93437 43640</p>
          </div>
        </div>
        <div className="info-row">
          <FaEnvelope size={18} />
          <div>
            <p className="info-label">Email us</p>
            <p className="info-value"><a href="mailto:vistaverveholidays@gmail.com">vistaverveholidays@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div >
  );
}