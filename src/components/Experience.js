import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa'
import '../styles/experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Programming Organization',
      period: '2022 - Present',
      duration: '2-3 Years',
      icon: FaBriefcase,
      responsibilities: [
        'Developed and maintained multiple WordPress websites with custom themes and plugins',
        'Built modern React applications with responsive designs and optimal performance',
        'Implemented e-commerce solutions using WooCommerce for various clients',
        'Created and integrated REST APIs for seamless data communication',
        'Performed regular website maintenance and security updates',
        'Collaborated with team members to deliver projects on time',
      ],
    },
    {
      title: 'WordPress Developer',
      company: 'Freelance & Contract Work',
      period: '2021 - 2022',
      duration: '1 Year',
      icon: FaCode,
      responsibilities: [
        'Designed and developed custom WordPress themes from scratch',
        'Created custom plugins to extend WordPress functionality',
        'Implemented Elementor page builder customizations',
        'Optimized website performance and SEO',
        'Provided ongoing support and maintenance for client websites',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Startup',
      period: '2020 - 2021',
      duration: '1 Year',
      icon: FaLaptopCode,
      responsibilities: [
        'Learned modern web development practices and frameworks',
        'Assisted in building responsive web interfaces with HTML, CSS, and JavaScript',
        'Participated in code reviews and team meetings',
        'Contributed to testing and debugging processes',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-icon">
                <exp.icon />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-duration">{exp.duration}</span>
                  </div>
                </div>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
