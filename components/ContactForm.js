import emailjs from 'emailjs-com'
import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(false)

    emailjs
      .sendForm(
        'service_cwpcr0x',
        'template_gaqp41v',
        e.target,
        'n8Suv1M0Lz2fDRL-b'
      )
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          e.target.reset()
        },
        (error) => {
          console.error('EmailJS error:', error)
          setLoading(false)
          setError(true)
        }
      )
  }

  return (
    <section id="contact" className="lt-contact-section">
      <div className="lt-contact-container">
        <div className="lt-contact-heading">
          <p className="lt-section-label">GET IN TOUCH</p>

          <h2>Start Your Tutoring Journey</h2>

          <p>
            Interested in tutoring? Fill out the form below and we&apos;ll
            get back to you.
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="lt-contact-form"
        >
          <div className="lt-form-group">
            <label htmlFor="parentName">Parent / Guardian Name</label>
            <input
              id="parentName"
              type="text"
              name="parent_name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="lt-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
          </div>

          <div className="lt-form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              id="studentName"
              type="text"
              name="student_name"
              placeholder="Student's name"
              required
            />
          </div>

          <div className="lt-form-group">
            <label htmlFor="yearGroup">Year Group</label>
            <select
              id="yearGroup"
              name="year_group"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select year group
              </option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
              <option value="Year 5">Year 5</option>
              <option value="Year 6">Year 6</option>
              <option value="Year 7">Year 7</option>
              <option value="Year 8">Year 8</option>
              <option value="Year 9">Year 9</option>
              <option value="Year 10">Year 10</option>
              <option value="Year 11">Year 11</option>
              <option value="Year 12">Year 12</option>
              <option value="Year 13">Year 13</option>
            </select>
          </div>

          <div className="lt-form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select subject
              </option>
              <option value="11+ Maths">11+ Maths</option>
              <option value="11+ English">11+ English</option>
              <option value="KS3 Maths">KS3 Maths</option>
              <option value="KS3 English">KS3 English</option>
              <option value="GCSE Maths">GCSE Maths</option>
              <option value="GCSE Science">GCSE Science</option>
              <option value="GCSE English">GCSE English</option>
              <option value="A Level Politics">A Level Politics</option>
              <option value="A Level Economics">A Level Economics</option>
            </select>
          </div>

          <div className="lt-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us a little about what you are looking for..."
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="lt-contact-button"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>

          {success && (
            <p className="lt-form-success">
              Thanks! Your enquiry has been sent successfully.
            </p>
          )}

          {error && (
            <p className="lt-form-error">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}