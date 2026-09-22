import Reveal from './Reveal'

const subjects = [
  {
    title: '11+ Maths',
    category: '11+',
    description:
      'Focused preparation covering problem solving, arithmetic, reasoning and exam technique.',
  },
  {
    title: '11+ English',
    category: '11+',
    description:
      'Build comprehension, vocabulary, grammar and creative writing skills.',
  },
  {
    title: 'KS3 Maths',
    category: 'KS3',
    description:
      'Strengthen mathematical foundations and build confidence for secondary school.',
  },
  {
    title: 'KS3 English',
    category: 'KS3',
    description:
      'Develop reading, writing, analysis, grammar and communication skills.',
  },
  {
    title: 'GCSE Maths',
    category: 'GCSE',
    description:
      'Structured support across GCSE Maths topics, exam technique and problem solving.',
  },
  {
    title: 'GCSE Science',
    category: 'GCSE',
    description:
      'Clear, structured support for understanding key scientific concepts and exam questions.',
  },
  {
    title: 'GCSE English',
    category: 'GCSE',
    description:
      'Develop analytical, essay-writing and exam skills across English Language and Literature.',
  },
  {
    title: 'A Level Politics',
    category: 'A Level',
    description:
      'Essay planning, argument development, source evaluation and political analysis.',
  },
  {
    title: 'A Level Economics',
    category: 'A Level',
    description:
      'Strengthen economic understanding, evaluation, diagrams and essay technique.',
  },
]

export default function Subjects() {
  return (
    <section id="subjects" className="lt-subjects-section">
      <div className="lt-section-heading">
        <span>WHAT WE TEACH</span>

        <h2>Specialist Tuition For Every Stage</h2>

        <p>
          Carefully structured support from the 11+ through to GCSE and
          selected A Level subjects.
        </p>
      </div>

      <div className="lt-subject-grid">
        {subjects.map((subject, index) => (
          <Reveal key={subject.title} delay={index * 60}>
            <div className="lt-subject-card">
              <div className="lt-subject-top">
                <span className="lt-subject-category">
                  {subject.category}
                </span>
              </div>

              <h3>{subject.title}</h3>

              <p>{subject.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}