import Reveal from './Reveal'

const tutors = [
  {
    name: 'Daniel Libin',
    year: '1st Year University',
    title: 'English · Politics · Economics',
    highlight: 'AAA at A Level',
    accent: 'Essay Specialist',
    points: [
      'Passed the 11+ and was studing at a leading grammar school.',
      'Achieved Grade 9 in GCSE English Language and Grade 8 in English Literature.',
      'Achieved AAA at A Level in Politics, Economics and Religious Studies.',
      'Secured a place at the University of Warwick to study Law.',
      'Aspiring Law student with a strong focus on essay-based subjects.',
    ],
  },
  {
    name: 'Samuel Libin',
    year: 'Year 12',
    title: 'Maths · Science',
    highlight: '10 A* · 2 A',
    accent: 'Maths & Science Specialist',
    points: [
      'Achieved 10 A* grades and 2 A grades at GCSE.',
      'Achieved A* grades in Maths, Science, Further Maths and English.',
      'Achieved an 11+ score of over 360.',
      'Maths and Science specialist with a strong focus on problem solving.',
      'Ranked in the top 8% nationally in UK Maths Challenge competitions and received Gold Awards.',
    ],
  },
]

export default function Credentials() {
  return (
    <section id="tutors" className="lt-tutors-section">
      <div className="lt-section-heading">
        <span>WHO WE ARE</span>
        <h2>Meet Our Tutors</h2>
        <p>
          Academic achievement combined with a genuine passion for helping
          students improve.
        </p>
      </div>

      <div className="lt-tutor-grid">
        {tutors.map((tutor, index) => (
          <Reveal key={tutor.name} delay={index * 120}>
            <article className="lt-tutor-card">
              <div className="lt-tutor-top">
                <div className="lt-avatar">
                  {tutor.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>

                <div>
                  <span className="lt-tutor-year">{tutor.year}</span>
                  <h3>{tutor.name}</h3>
                </div>
              </div>

              <div className="lt-tutor-specialism">
                {tutor.title}
              </div>

              <div className="lt-tutor-highlight">
                <small>{tutor.accent}</small>
                <strong>{tutor.highlight}</strong>
              </div>

              <ul>
                {tutor.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}