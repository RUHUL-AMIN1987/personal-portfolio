import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import '../styles/contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ruhulamin3052@gmail.com',
      link: 'mailto:ruhulamin3052@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '01714237145',
      link: 'tel:01714237145',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Patnitola, Naogaon',
      link: null,
    },
  ]

  const socialLinks = [
    { icon: FaGithub, name: 'GitHub', url: 'https://github.com/RUHUL-AMIN1987' },
    { icon: FaLinkedin, name: 'LinkedIn', url: 'href="https://www.linkedin.com/in/ruhul-amin-ruhul-amin/"' },
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
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In Touch
        </motion.h2>

        <motion.p className="contact-intro" variants={itemVariants}>
          I'm currently available for freelance work and exciting opportunities.
          If you have a project in mind or just want to chat, feel free to reach out!
        </motion.p>

        <motion.div className="contact-content" variants={itemVariants}>
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>

            <div className="contact-info-items">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">
                    <info.icon />
                  </div>
                  <div className="contact-info-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <h4>Follow Me</h4>
              <div className="contact-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
