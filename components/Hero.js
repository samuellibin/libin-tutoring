import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="lt-hero">
      <div className="lt-hero-glow lt-hero-glow-one" />
      <div className="lt-hero-glow lt-hero-glow-two" />

      <div className="lt-hero-inner">
        <Reveal>
          <div className="lt-hero-eyebrow">
            11+ · KS3 · GCSE · A LEVEL
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1>
            High-Achieving Tutors.
            <span>Personalised Support.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p>
            Specialist tutoring in Maths, English, Science, Politics and
            Economics, delivered by academically high-achieving tutors.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="lt-hero-actions">
            <a href="#subjects" className="lt-button lt-button-gold">
              Explore Subjects
            </a>

            <a href="#tutors" className="lt-button lt-button-outline">
              Meet Our Tutors
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="lt-hero-strip">
            <span>11+ Preparation</span>
            <span>KS3 Support</span>
            <span>GCSE Tuition</span>
            <span>A Level Subjects</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}