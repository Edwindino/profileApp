import { motion, type Variants } from 'motion/react';
import { experience } from '../data/experience';

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
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

const timelineContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const timelineItemVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const chipVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">Experience</p>
          <h2>Career journey.</h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="timeline"
          variants={timelineContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              className="timeline-item"
              custom={index}
              variants={timelineItemVariants}
            >
              {/* Timeline Dot */}
              <motion.div
                className="timeline-dot"
                aria-hidden="true"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
              />

              {/* Timeline Content */}
              <motion.div
                className="timeline-content"
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="timeline-header">
                  <div>
                    <h3>{item.role}</h3>

                    <p>
                      {item.company} · {item.location}
                    </p>
                  </div>

                  <span>{item.period}</span>
                </div>

                <p className="timeline-description">
                  {item.description}
                </p>

                {/* Technologies */}
                <motion.div
                  className="chip-row"
                  variants={timelineContainerVariants}
                >
                  {item.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="chip"
                      variants={chipVariants}
                      whileHover={{
                        scale: 1.08,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}