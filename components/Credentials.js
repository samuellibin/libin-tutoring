import { motion } from "framer-motion"

export default function Credentials() {
  return (
    <section className="credentials">
      <h2>Meet Our Tutors</h2>

      <div className="credentials-grid">
        <motion.div
          className="credential-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Daniel Libin (Y13)</h3>
          <p><strong>English Specialist</strong></p>
          <ul>
            <li>Passed the 11+</li>
            <li>8 English Literature, 9 English Language</li>
            <li>On track for A*AA at A-Level</li>
            <li>Offers from Queen Mary & Warwick</li>
            <li>Aspiring Law Student</li>
          </ul>
        </motion.div>

        <motion.div
          className="credential-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3>Samuel Libin (Y11)</h3>
          <p><strong>Maths Specialist</strong></p>
          <ul>
            <li>11+ score over 360</li>
            <li>Predicted all 9s at GCSE</li>
            <li>GCSE Maths & Further Maths (Grade 9 track)</li>
            <li>Top 8% UK Maths Challenge (Gold Awards)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}


