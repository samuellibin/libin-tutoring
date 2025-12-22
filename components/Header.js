export default function Header() {
  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #E5E7EB',
      padding: '20px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{
        margin: 0,
        fontWeight: 800,
        letterSpacing: '-0.03em'
      }}>
        Libin Tutoring
      </h2>

      <nav style={{
        display: 'flex',
        gap: '28px',
        fontWeight: 500,
        color: '#334155'
      }}>
        <a href="#subjects">Subjects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

