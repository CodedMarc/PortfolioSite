import { useState } from 'react'
import styles from './Skills.module.scss';

const Skills = () => {
  const [project, setProject] = useState('Panoptic')
  const [about, setAbout] = useState('About the project. What it solved. What it does. How I did it.')
  const [technologies, setTechnologies] = useState('JS');
  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.projectDesc}>
        <h1>{project}</h1>
        <p>{about}</p>
        <div className={styles.technologies}>
          <h2>Technologies:</h2>
          <li>{technologies}</li>
        </div>
      </div>
      <div className={styles.projectPrev}>
        <div className={styles.myProject}></div>
        <div className={styles.btnContainer}>
          <button>Visit Site</button>
          <button>Preview</button>
        </div>
      </div>
    </section>
  )
}

export default Skills