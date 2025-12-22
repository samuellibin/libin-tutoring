export default function Subjects() {
  const subjects = [
    { title: '11+ Maths', desc: 'Exam-focused preparation with proven techniques' },
    { title: '11+ English', desc: 'Comprehension, grammar and writing skills' },
    { title: 'KS3 Maths', desc: 'Strong foundations for secondary success' },
    { title: 'KS3 English', desc: 'Reading, writing and confidence building' },
    { title: 'GCSE Maths', desc: 'Targeted support for higher grades' }
  ]

  return (
    <section id="subjects" style={{ padding: '100px 32px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>
        Subjects Offered
      </h2>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={row}>
          {subjects.slice(0, 3).map(renderCard)}
        </div>

        {/* Bottom row */}
        <div style={{ ...row, justifyContent: 'center', marginTop: '28px' }}>
          {subjects.slice(3).map(renderCard)}
        </div>
      </div>
    </section>
  )
}

function renderCard(subject) {
  return (
    <div
      key={subject.title}
      style={card}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 22px 45px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.07)'
      }}
    >
      <h3 style={{ marginBottom: '12px' }}>{subject.title}</h3>
      <p style={{ color: '#475569' }}>{subject.desc}</p>
    </div>
  )
}

const row = {
  display: 'flex',
  gap: '28px',
  flexWrap: 'wrap'
}

const card = {
  background: '#FFFFFF',
  borderRadius: '20px',
  padding: '36px',
  width: '300px',
  boxShadow: '0 12px 30px rgba(0,0,0,0.07)',
  transition: 'all 0.3s ease',
  cursor: 'default'
}
