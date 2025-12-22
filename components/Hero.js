export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #020617, #0F172A)',
      padding: '140px 32px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3.3rem',
        fontWeight: 800,
        color: '#FFFFFF',   // 🔥 FORCE WHITE
        maxWidth: '900px',
        margin: '0 auto 26px',
        letterSpacing: '-0.03em',
        animation: 'fadeUp 0.8s ease-out forwards'
      }}>
        Specialist Maths & English Tutoring
      </h1>

      <p style={{
        fontSize: '1.15rem',
        color: '#E5E7EB',
        maxWidth: '620px',
        margin: '0 auto 42px',
        animation: 'fadeUp 1s ease-out forwards'
      }}>
        High-quality support for 11+, KS3 and GCSE students — structured, calm, and results-focused.
      </p>

      <a href="#contact">
        <button style={{
          background: '#F5C46B',
          color: '#0F172A',
          padding: '14px 42px',
          borderRadius: '999px',
          fontWeight: 700,
          fontSize: '1rem',
          animation: 'fadeUp 1.2s ease-out forwards',
          cursor: 'pointer'
        }}>
          Enquire Now
        </button>
      </a>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
