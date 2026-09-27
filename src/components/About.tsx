import { motion, type Variants } from 'motion/react';

const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '5+', label: 'Projects' },
  { value: '5+', label: 'Technologies' },
];

const headingVariants: Variants = {
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

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">About Me</p>

          <h2>Building thoughtful digital experiences.</h2>
        </motion.div>

        <div className="about-grid">

          {/* About Content */}
          <motion.div
            className="about-copy"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p>
              I&apos;m a developer who enjoys turning product ideas into clean,
              interactive, and user-friendly experiences. I care about design,
              performance, and writing maintainable code that is easy to scale.
            </p>

            <p>
              My interests include frontend architecture, UI systems, product
              thinking, and building interfaces that are both visually polished
              and technically reliable.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="stats-grid"
            aria-label="Summary statistics"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat) => (
              <motion.article
                key={stat.label}
                className="info-card"
                variants={statVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}