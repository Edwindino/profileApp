import { motion, type Variants } from 'motion/react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/edwindino' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/edwin-dino-7a79a0217' },
  { label: 'Email', href: 'mailto:edwindino1999@gmail.com' },
];

const containerVariants: Variants = {
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
    x: 60,
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

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-copy reveal"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <motion.p  className="eyebrow"
           animate={{ x: [0, 8, 0, -8, 0] }}
           transition={{
           duration: 6,
           repeat: Infinity,
           ease: "easeInOut",
          }}
         >
         Hi, I&apos;m Edwin Dino
        </motion.p>

        <motion.h1
          animate={{ x: [-12, 12, -12] }}
          transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
         }}
        >
         Full Stack Developer<span className="accent-text">.</span>
        </motion.h1>

        <motion.p className="lead" variants={itemVariants}>
          I build modern, responsive, and user-centered digital experiences
          that turn ideas into polished products.
         </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.ul
            className="social-list"
            aria-label="Social links"
            variants={containerVariants}
          >
            {socialLinks.map((link) => (
              <motion.li key={link.label} variants={itemVariants}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-visual reveal"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: 'easeOut',
          }}
        >
          <motion.div
            className="visual-card main-card"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="mini-label">Available for work</div>

            <div className="code-window">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-top"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span>React</span>
            <strong>UI Systems</strong>
          </motion.div>

          <motion.div
            className="floating-card card-bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span>TypeScript</span>
            <strong>Clean Logic</strong>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}