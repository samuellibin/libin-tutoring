// Project: LIBIN_TUTORING Next.js Starter
// Files included below. Create these files in a new Next.js project (or copy into your repo).

// package.json
{
  "name": "libin-tutoring",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "13.5.8",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}

// README.md
# LIBIN TUTORING — Next.js Starter

This is a minimal Next.js site for **LIBIN TUTORING** (KS3 & 11+ Maths and English).

Files:
- `pages/index.js` — homepage
- `pages/_app.js` — global styles wrapper
- `components/*` — small UI components
- `styles/globals.css` — styling

## Run locally
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev` (http://localhost:3000)

## Deploy to Vercel
Option A (web):
1. Push this repo to GitHub.
2. On vercel.com, click "Import Project" → connect GitHub → select this repo.
3. Deploy. Vercel will auto-detect Next.js.

Option B (CLI):
1. `npm i -g vercel`
2. `vercel login`
3. `vercel` (follow prompts)


// pages/_app.js
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// pages/index.js
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Subjects from '../components/Subjects'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LIBIN TUTORING — KS3 & 11+</title>
        <meta name="description" content="KS3 and 11+ Maths & English tutoring — LIBIN TUTORING" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="container">
        <Hero />
        <Subjects />
        <ContactForm />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} LIBIN TUTORING — KS3 & 11+ Maths & English</p>
      </footer>
    </div>
  )
}

// components/Header.js
export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">LIBIN TUTORING</div>
      <nav>
        <a href="#subjects">Subjects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

// components/Hero.js
export default function Hero() {
  return (
    <section className="hero">
      <h1>KS3 & 11+ Maths and English — Personalised Tuition</h1>
      <p>Experienced tutor helping students build confidence and achieve results.</p>
      <a className="cta" href="#contact">Book a free consultation</a>
    </section>
  )
}

// components/Subjects.js
export default function Subjects() {
  const items = [
    { title: 'KS3 Maths', bullets: ['Number & algebra', 'Geometry', 'Problem-solving'] },
    { title: '11+ Maths', bullets: ['Exam techniques', 'Arithmetic', 'Reasoning'] },
    { title: 'KS3 English', bullets: ['Reading comprehension', 'Writing skills', 'SPaG'] },
    { title: '11+ English', bullets: ['Comprehension', 'Creative writing', 'Vocabulary'] }
  ]

  return (
    <section id="subjects" className="subjects">
      <h2>Subjects</h2>
      <div className="grid">
        {items.map((s) => (
          <article key={s.title} className="card">
            <h3>{s.title}</h3>
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

// components/ContactForm.js
export default function ContactForm() {
  return (
    <section id="contact" className="contact">
      <h2>Contact / Book</h2>
      <p>Fill in the form and I’ll get back to you within 24 hours.</p>

      <form className="form" action="https://formspree.io/f/your_form_id" method="POST">
        <label>
          Your name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Subject
          <select name="subject">
            <option>KS3 Maths</option>
            <option>11+ Maths</option>
            <option>KS3 English</option>
            <option>11+ English</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows="4" />
        </label>
        <button type="submit">Send</button>
      </form>

      <p className="note">Or email directly: <a href="mailto:hello@libintutoring.example">hello@libintutoring.example</a></p>
    </section>
  )
}

// styles/globals.css
:root{
  --bg:#f7fafc;
  --card:#ffffff;
  --accent:#2b6cb0;
  --text:#1a202c;
}
*{box-sizing:border-box}
body{font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; margin:0; color:var(--text); background:var(--bg)}
.container{max-width:980px; margin:30px auto; padding:0 16px}
.site-header{display:flex;justify-content:space-between;align-items:center;padding:18px 16px;background:var(--card);box-shadow:0 2px 6px rgba(10,10,10,0.03);border-radius:12px}
.brand{font-weight:700}
.site-header nav a{margin-left:18px;text-decoration:none;color:var(--accent)}
.hero{margin:28px 0;padding:34px;background:linear-gradient(135deg,#fff,#f1f5f9);border-radius:12px}
.hero h1{margin:0 0 10px 0}
.cta{display:inline-block;margin-top:12px;padding:10px 16px;border-radius:8px;background:var(--accent);color:#fff;text-decoration:none}
.subjects{margin-top:22px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
.card{background:var(--card);padding:16px;border-radius:10px;box-shadow:0 1px 4px rgba(10,10,10,0.04)}
.contact{margin-top:26px;padding:18px;background:var(--card);border-radius:10px}
.form{display:grid;gap:10px}
.form input,.form textarea,.form select{width:100%;padding:8px;border-radius:6px;border:1px solid #e2e8f0}
.form button{padding:10px;border-radius:8px;background:var(--accent);color:#fff;border:0}
.footer{margin:28px 0;text-align:center;color:#718096}

/* small screens */
@media(max-width:520px){.site-header{flex-direction:column;gap:8px}}

// END OF FILES
