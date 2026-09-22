import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Subjects from '../components/Subjects'
import Credentials from '../components/Credentials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const SITE_URL = 'https://libin-tutoring.vercel.app'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'LIBIN TUTORING',
    url: SITE_URL,
    description:
      'LIBIN TUTORING provides tutoring for 11+, KS3, GCSE and selected A Level subjects including Maths, English, Science, Politics and Economics.',
  }

  return (
    <>
      <Head>
        <title>
          LIBIN TUTORING | 11+, KS3, GCSE & A Level Tutoring
        </title>

        <meta
          name="description"
          content="LIBIN TUTORING offers specialist 11+, KS3, GCSE and A Level tutoring in Maths, English, Science, Politics and Economics."
        />

        <meta name="robots" content="index,follow" />

        <link rel="canonical" href={SITE_URL} />

        <meta
          property="og:title"
          content="LIBIN TUTORING | Specialist Tuition"
        />

        <meta
          property="og:description"
          content="Specialist tutoring for 11+, KS3, GCSE and selected A Level subjects."
        />

        <meta property="og:type" content="website" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <Header />
      <Hero />
      <Subjects />
      <Credentials />
      <ContactForm />
      <Footer />
    </>
  )
}