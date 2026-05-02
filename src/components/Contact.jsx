import React from "react";
import Swal from "sweetalert2";
import { MdConnectWithoutContact } from "react-icons/md";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "5edf734f-ff76-4433-aab4-29413a0c459e");

    const json = JSON.stringify(Object.fromEntries(formData));
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((r) => r.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "I will get back to you soon!",
        icon: "success",
        confirmButtonColor: "#5BC0EB",
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <p className="section-eyebrow">Say hello</p>
        <h2 className="section-heading">Get In Touch</h2>

        <div className="contact-card">
          <div className="contact-icon-box">
            <MdConnectWithoutContact />
          </div>

          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.25rem",
              color: "var(--navy)",
              textAlign: "center",
              marginBottom: "0.35rem",
            }}
          >
            Let's Talk
          </h3>
          <p className="contact-subtitle">
            Let's have an interesting talk about career building.
          </p>

          <div
            style={{
              width: "40px",
              height: "2px",
              background: "var(--sky-light)",
              borderRadius: "2px",
              margin: "0 auto 1.5rem",
            }}
          />

          <form onSubmit={onSubmit}>
            <div className="form-field">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                name="message"
                placeholder="Enter your message"
                rows={4}
                required
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
