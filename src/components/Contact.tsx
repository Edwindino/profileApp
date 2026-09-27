import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, type Variants } from 'motion/react';

const copyVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">

        {/* Contact Information */}
        <motion.div
          className="contact-copy"
          variants={copyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="eyebrow">Contact</p>

          <h2>Let&apos;s build something meaningful.</h2>

          <motion.ul
            className="contact-list"
            variants={listVariants}
          >
            <motion.li variants={itemVariants}>
              <span>Email</span>
              <a href="mailto:edwindino1999@gmail.com">
                edwindino1999@gmail.com
              </a>
            </motion.li>

            <motion.li variants={itemVariants}>
              <span>LinkedIn</span>
              <a
                href="https://linkedin.com/in/edwin-dino-7a79a0217"
                target="_blank"
                rel="noreferrer"
              >
                edwindino
              </a>
            </motion.li>

            <motion.li variants={itemVariants}>
              <span>GitHub</span>
              <a
                href="https://github.com/edwindino"
                target="_blank"
                rel="noreferrer"
              >
                edwindino
              </a>
            </motion.li>

            <motion.li variants={itemVariants}>
              <span>Location</span>
              <span>Marthandam, Tamil Nadu</span>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="field-group"
            variants={itemVariants}
          >
            <label htmlFor="name">Name</label>

            <motion.input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              whileFocus={{
                scale: 1.01,
              }}
            />
          </motion.div>

          <motion.div
            className="field-group"
            variants={itemVariants}
          >
            <label htmlFor="email">Email</label>

            <motion.input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              whileFocus={{
                scale: 1.01,
              }}
            />
          </motion.div>

          <motion.div
            className="field-group"
            variants={itemVariants}
          >
            <label htmlFor="message">Message</label>

            <motion.textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write a message..."
              whileFocus={{
                scale: 1.01,
              }}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="button primary full-width"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Send Message
          </motion.button>

          {submitted ? (
            <motion.p
              className="form-success"
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Thanks! This form is currently a demo. Please contact me using
              the email above.
            </motion.p>
          ) : null}
        </motion.form>

      </div>
    </section>
  );
}