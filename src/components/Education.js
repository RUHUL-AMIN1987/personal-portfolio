import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import '../styles/education.css'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Zarqa University',
      location: 'Zarqa, Jordan',
      period: 'Current',
      status: 'In Progress',
      icon: FaGraduationCap,
      description: [
        'Studying core computer science fundamentals including algorithms, data structures, and software engineering',
        'Learning advanced programming concepts and modern development practices',
        'Participating in practical projects and collaborative learning',
        'Building a strong foundation in computer science theory and application',
      ],
    },
  ]

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
    <section id="education" className="education" ref={ref}>
      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Education
        </motion.h2>

        <motion.div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="education-icon">
                <edu.icon />
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">
                    <FaUniversity className="institution-icon" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="education-meta">
                    <span className="education-location">{edu.location}</span>
                    <span className="education-status">{edu.status}</span>
                  </div>
                </div>
                <ul className="education-description">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="certifications" variants={itemVariants}>
          <h3 className="certifications-title">Continuous Learning</h3>
          <p className="certifications-text">
            Actively expanding knowledge through online courses, documentation, and hands-on projects.
            Committed to staying current with the latest web development technologies and best practices.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education
