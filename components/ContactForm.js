// components/ContactForm.js
export default function ContactForm() {
  return (
    <section className="contact container" id="contact">
      <h2>Contact Us</h2>
      <form className="form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
