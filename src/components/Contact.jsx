import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Contact — improved UI
 * - Inline SVG icons instead of Font Awesome
 * - Keeps all text exactly the same
 * - Accessible labels and small UX improvements
 */

const Contact = () => {
  const { currentLang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      currentLang === "ar"
        ? "تم إرسال الرسالة — شكرًا!"
        : "Message sent — thanks!"
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span
            className="section-tag"
            data-en="Get in Touch"
            data-ar="تواصل معنا"
          >
            {currentLang === "en" ? "Get in Touch" : "تواصل معنا"}
          </span>
          <h2 className="section-title" data-en="Contact Us" data-ar="اتصل بنا">
            {currentLang === "en" ? "Contact Us" : "اتصل بنا"}
          </h2>
        </div>

        <div className="contact-content">
          {/* Contact info column (cards) */}
          <div
            className="contact-info"
            style={{ textAlign: currentLang === "en" ? "left" : "right" }}
            aria-label={
              currentLang === "en" ? "Contact information" : "معلومات الاتصال"
            }
          >
            <div className="contact-item" data-aos="fade-right">
              <div className="contact-icon" aria-hidden="true">
                {/* Phone SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.76.72 2.56a2 2 0 0 1-.45 2.11L8.91 9.91a14 14 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.8.35 1.66.6 2.56.72A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="contact-details"
                style={{ textAlign: currentLang === "en" ? "left" : "right" }}
              >
                <h4 data-en="Phone" data-ar="الهاتف">
                  {currentLang === "en" ? "Phone" : "الهاتف"}
                </h4>
                <a href="tel:+971566137333" dir="ltr">
                  +971 56 613 7333
                </a>
              </div>
            </div>

            <div className="contact-item" data-aos="fade-right">
              <div className="contact-icon" aria-hidden="true">
                {/* Envelope SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M3 8.5v7.5A2 2 0 0 0 5 18h14a2 2 0 0 0 2-2V8.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 6.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2V7l9 6 9-6V6.5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="contact-details"
                style={{ textAlign: currentLang === "en" ? "left" : "right" }}
              >
                <h4 data-en="Email" data-ar="البريد الإلكتروني">
                  {currentLang === "en" ? "Email" : "البريد الإلكتروني"}
                </h4>
                <a href="mailto:wateen.ae@hotmail.com" dir="ltr">
                  wateen.ae@hotmail.com
                </a>
              </div>
            </div>

            <div className="contact-item" data-aos="fade-right">
              <div className="contact-icon" aria-hidden="true">
                {/* Globe SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.05 12H21.95"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2.05c2.5 2.3 3.3 5.9 3.6 9.95M12 21.95c-2.5-2.3-3.3-5.9-3.6-9.95"
                    stroke="currentColor"
                    strokeWidth="1.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="contact-details"
                style={{ textAlign: currentLang === "en" ? "left" : "right" }}
              >
                <h4 data-en="Website" data-ar="الموقع الإلكتروني">
                  {currentLang === "en" ? "Website" : "الموقع الإلكتروني"}
                </h4>
                <a
                  href="https://www.wateenproduction.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                >
                  www.wateenproduction.ae
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-wrapper" data-aos="fade-left">
            <form
              className="contact-form"
              id="contactForm"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    aria-label={currentLang === "en" ? "Your Name" : "اسمك"}
                  />
                  <label htmlFor="name" data-en="Your Name" data-ar="اسمك">
                    {currentLang === "en" ? "Your Name" : "اسمك"}
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    aria-label={
                      currentLang === "en" ? "Your Email" : "بريدك الإلكتروني"
                    }
                  />
                  <label
                    htmlFor="email"
                    data-en="Your Email"
                    data-ar="بريدك الإلكتروني"
                  >
                    {currentLang === "en" ? "Your Email" : "بريدك الإلكتروني"}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleChange}
                  aria-label={currentLang === "en" ? "Subject" : "الموضوع"}
                />
                <label htmlFor="subject" data-en="Subject" data-ar="الموضوع">
                  {currentLang === "en" ? "Subject" : "الموضوع"}
                </label>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  aria-label={currentLang === "en" ? "Your Message" : "رسالتك"}
                ></textarea>
                <label
                  htmlFor="message"
                  data-en="Your Message"
                  data-ar="رسالتك"
                >
                  {currentLang === "en" ? "Your Message" : "رسالتك"}
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 12,
                }}
              >
                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  aria-label={
                    currentLang === "en" ? "Send Message" : "إرسال الرسالة"
                  }
                >
                  <span data-en="Send Message" data-ar="إرسال الرسالة">
                    {currentLang === "en" ? "Send Message" : "إرسال الرسالة"}
                  </span>
                  {/* inline paper-plane SVG */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    style={{ marginLeft: 8 }}
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22l-4-9-9-4 20-7z"
                      fill="currentColor"
                      opacity="0.08"
                    />
                  </svg>
                </button>

                {/* small hint / copy (optional, non-text-changing) */}
                <div
                  className="contact-hint"
                  aria-hidden="true"
                  style={{ alignSelf: "center" }}
                >
                  {/* keep empty or use as microcopy later */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
