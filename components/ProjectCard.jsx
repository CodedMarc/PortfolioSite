import Image from "next/image"
import styles from './ProjectCard.module.scss';
const ProjectCard = ({ img, name, desc, tech, link}) => {
  return (
    <li className={styles.ProjectCard}>

      <div className={styles.projectImg}>
        <Image unoptimized={true} src={img} alt={`${name} project`} priority />
      </div>

      <div className={styles.projectText}>

        <h3 className={styles.featured}>Featured Project</h3>
        <h1 className={styles.projectName}>{name}</h1>
        <p className={styles.projectDesc}>{desc}</p>
        <p className={styles.tech}>{tech.map((el, i) => i === tech.length - 1 ? el : el + ', ')}</p>

        <div className={styles.btnContainer}>
          <a href={link} target="_blank" rel="noreferrer" className={styles.visitSite}>Visit Site</a>
          <a href={'/'} className={styles.visitGit}>GitHub</a>
        </div>

      </div>

    </li>
  )
}

export default ProjectCard