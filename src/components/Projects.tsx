import { motion, type Variants } from 'motion/react';
import { projects } from '../data/projects';

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

const projectsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const chipContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
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

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">Projects</p>
          <h2>Selected work.</h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="projects-grid"
          variants={projectsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card ${project.accent}`}
              variants={projectVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
            >
              {/* Project Image */}
              <motion.div
                className="project-image"
                aria-hidden="true"
              >
                <motion.div
                  className="image-placeholder"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                />
              </motion.div>

              {/* Project Content */}
              <div className="project-body">
                <h3>{project.name}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <motion.div
                  className="chip-row"
                  variants={chipContainerVariants}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={`${project.id}-${tech}`}
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

                {/* Actions */}
                <div className="project-actions">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button secondary small"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button primary small"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}