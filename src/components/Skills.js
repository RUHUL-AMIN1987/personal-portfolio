import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaWordpress,
  FaReact,
  FaPhp,
  FaCss3Alt,
  FaHtml5,
  FaShoppingCart,
  FaServer,
  FaTools,
} from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiGatsby, SiElementor, SiWoocommerce } from 'react-icons/si'
import '../styles/skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const skills = [
    { name: 'WordPress', icon: FaWordpress, level: 95 },
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'PHP', icon: FaPhp, level: 85 },
    { name: 'CSS', icon: FaCss3Alt, level: 90 },
    { name: 'HTML', icon: FaHtml5, level: 95 },
    { name: 'JavaScript', icon: SiJavascript, level: 88 },
    { name: 'TypeScript', icon: SiTypescript, level: 82 },
    { name: 'Gatsby', icon: SiGatsby, level: 85 },
    { name: 'Elementor', icon: SiElementor, level: 92 },
    { name: 'WooCommerce', icon: SiWoocommerce, level: 88 },
    { name: 'E-commerce', icon: FaShoppingCart, level: 87 },
    { name: 'REST API', icon: FaServer, level: 85 },
    { name: 'WordPress Plugins', icon: FaWordpress, level: 90 },
    { name: 'Website Maintenance', icon: FaTools, level: 93 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          My Skills
        </motion.h2>

        <motion.div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="skill-icon">
                <skill.icon />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
