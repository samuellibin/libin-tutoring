// components/Credentials.js
export default function Credentials() {
  return (
    <section className="credentials">
      <h2 className="credentials-title">Meet Our Tutors</h2>

      <div className="credentials-grid">
        {/* English Tutor */}
        <div className="credential-card">
          <span className="badge">English Specialist</span>
          <h3>Daniel Libin <small>(Year 13)</small></h3>
          <ul>
            <li>Passed the 11+</li>
            <li>Studying at a leading UK grammar school</li>
            <li>Grade 9 English Language</li>
            <li>Grade 8 English Literature</li>
            <li>Predicted A*AA at A-Level in essay subjects</li>
            <li>Offers from Queen Mary & Warwick</li>
            <li>Aspiring Law Student</li>
          </ul>
        </div>

        {/* Maths Tutor */}
        <div className="credential-card">
          <span className="badge maths">Maths Specialist</span>
          <h3>Samuel Libin <small>(Year 11)</small></h3>
          <ul>
            <li>11+ score of 360+</li>
            <li>Studying at a leading UK grammar school</li>
            <li>Predicted all Grade 9s at GCSE</li>
            <li>On track for Grade 9 in GCSE Maths</li>
            <li>Grade 9 in Further Mathematics</li>
            <li>Top 8% nationally in UKMT challenges</li>
            <li>Gold Awards in UKMT Junior & Intermediate</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

