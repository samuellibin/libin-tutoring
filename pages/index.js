
// pages/index.js
import Header from '../components/Header'
import Hero from '../components/Hero'
import Subjects from '../components/Subjects'
import Credentials from '../components/Credentials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Subjects />
      <Credentials />
      <ContactForm />
      <Footer />
    </>
  )
}

