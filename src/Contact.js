import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        {/* Contact form elements */}
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
