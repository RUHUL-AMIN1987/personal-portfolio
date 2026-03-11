import React from 'react'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import '../styles/hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <Scene3D />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ruhul Amin</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Specializing in WordPress, React, and E-commerce solutions.
            Building modern, responsive, and user-friendly web applications.
          </p>
          <div className="hero-location">
            <span>Based in Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        <motion.div className="hero-cta" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <a
            href="https://github.com/RUHUL-AMIN1987"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ruhul-amin-ruhul-amin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="www.linkedin.com/in/ruhul-amin-ruhul-amin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="mouse"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
