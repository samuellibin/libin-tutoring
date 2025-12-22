import emailjs from 'emailjs-com'
import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  function sendEmail(e) {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      'service_cwpcr0x',
      'template_gaqp41v',
      e.target,
      'n8Suv1M0Lz2fDRL-b'
    ).then(() => {
      alert('Thank you — we will contact you shortly.')
      e.target.reset()
      setLoading(false)
    }).catch(() => {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    })
  }

  return (
    <section id="contact" style={{
      background: 'linear-gradient(180deg, #F8FAFC, #EEF2F7)',
      padding: '120px 32px'
    }}>
      <form onSubmit={sendEmail} style={{
        background: 'white',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '48px',
        borderRadius: '26px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
        animation: 'fadeUp 0.8s ease-out forwards'
      }}>
        <div style={{
          width: '60px',
          height: '4px',
          background: '#F5C46B',
          borderRadius: '999px',
          marginBottom: '22px'
        }} />

        <h2 style={{ marginBottom: '10px' }}>Contact Us</h2>
        <p style={{ color: '#64748B', marginBottom: '30px' }}>
          Send an enquiry and we’ll get back to you promptly.
        </p>

        <input name="name" placeholder="Name" required style={input} />
        <input name="email" placeholder="Email" required style={input} />
        <input name="subject" placeholder="Subject & Level" required style={input} />
        <textarea name="message" placeholder="Message" rows="4" required style={input} />

        <button type="submit" disabled={loading} style={{
          width: '100%',
          padding: '15px',
          borderRadius: '999px',
          background: '#0F172A',
          color: 'white',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          {loading ? 'Sending…' : 'Send Enquiry'}
        </button>
      </form>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

const input = {
  width: '100%',
  padding: '14px',
  marginBottom: '18px',
  borderRadius: '12px',
  border: '1px solid #E5E7EB',
  fontSize: '0.95rem'
}

