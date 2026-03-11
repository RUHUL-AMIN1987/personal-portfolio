import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/about.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p>
              I'm <strong>Ruhul Amin</strong>, a passionate Full Stack Developer
              based in Zarqa, Jordan. Currently pursuing my Computer Science degree at
              Zarqa University, I combine academic knowledge with practical experience
              to create exceptional web solutions.
            </p>
            <p>
              With 2-3 years of professional experience working for a programming organization,
              I've honed my skills in modern web development technologies. I specialize in
              building scalable web applications, custom WordPress solutions, and e-commerce
              platforms that deliver real business value.
            </p>
            <p>
              My approach combines clean code practices, user-centered design, and cutting-edge
              technologies to create websites that are not only beautiful but also performant
              and maintainable. I'm particularly passionate about creating seamless user
              experiences and solving complex technical challenges.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">2-3</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">10+</div>
              <div className="highlight-label">Technologies</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">CS</div>
              <div className="highlight-label">Degree Student</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
