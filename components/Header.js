export default function Header() {
  return (
    <header className="lt-header">
      <div className="lt-header-inner">
        <a href="/" className="lt-logo">
          <span className="lt-logo-mark">L</span>
          <span>
            <strong>LIBIN</strong>
            <small>TUTORING</small>
          </span>
        </a>

        <nav className="lt-nav">
          <a href="#subjects">Subjects</a>
          <a href="#tutors">Tutors</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="lt-header-cta">
          Enquire
        </a>
      </div>
    </header>
  )
}