import { motion, type Variants } from 'motion/react';
import { skillGroups } from '../data/skills';

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

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
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

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">Skills</p>

          <h2>Tools and technologies I work with.</h2>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="skills-grid"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="skill-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <h3>{group.title}</h3>

              <ul>
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{
                      x: 5,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <span>{skill.name}</span>

                    {skill.level ? (
                      <small>{skill.level}</small>
                    ) : null}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}