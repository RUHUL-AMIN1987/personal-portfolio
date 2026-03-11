import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Ruhul Amin - Full Stack Developer</title>
    <meta
      name="description"
      content="Professional portfolio of Ruhul Amin, a Full Stack Developer specializing in WordPress, React, and E-commerce solutions from Jordan"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="Full Stack Developer, WordPress Developer, React Developer, Web Developer, Jordan, Zarqa, E-commerce, WooCommerce" />
    <meta name="author" content="Ruhul Amin" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ruhul Amin - Full Stack Developer" />
    <meta property="og:description" content="Professional portfolio showcasing expertise in WordPress, React, and E-commerce solutions" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ruhul Amin - Full Stack Developer" />
    <meta name="twitter:description" content="Professional portfolio showcasing expertise in WordPress, React, and E-commerce solutions" />
  </>
)
