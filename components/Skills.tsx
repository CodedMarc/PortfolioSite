import { useState, useEffect } from 'react'
import styles from './Skills.module.scss';
import axios from 'axios';
import Cryptracker from '../public/assets/Cryptracker.png'
import SongPalate from '../public/assets/SongPalatePic.png';
import CoffeePic from '../public/assets/CoffeePic.png';
import Panoptic from '../public/assets/PanopticPrev.gif';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
const Skills = () => {
  const [about, setAbout] = useState('About the project. What it solved. What it does. How I did it.')
  const [technologies, setTechnologies] = useState('JS');
  const [projects, setProjects] = useState([
    {
      name: 'Song Palate', 
      desc: 'A web app with a redesigned Spotify UI that allows users to connect their Spotify account and listen to music using the Spotify Web Player. ', 
      img: SongPalate,
      tech: ['React', 'Express', 'MongoDB Atlas', 'Spotify API', 'Heroku'],
      link: 'http://SongPalate.herokuapp.com/' 
    }, 
    {
      name: 'Panoptic Beta',
      desc: 'An innovative metrics tracker for Web Applications! An intuitive solution for monitoring key web application metrics per git commit!',
      img: SongPalate,
      tech: ['NextJS', 'Github OAuth', 'PassportJS', 'MongoDB Atlas', 'SCSS', 'ChartJS', 'Vercel'],
      link: 'https://panoptic.app/'
    },
    {
      name: 'Cryptracker',
      desc: 'View a list of live cryptocurrency prices, market cap, trading volume, and percent change in the last 24 hours!',
      img: Cryptracker,
      tech: ['React', 'CoinGeckoAPI', 'CSS'],
      link: 'https://CodedMarc.github.io/Cryptracker'
    },
    {
      name: 'Coffee Shop',
      desc: 'A landing page built for a small coffee shop business. Simple, but elegant design.',
      img: CoffeePic,
      tech: ['HTML5', 'CSS', 'Vanilla JS'],
      link: '/'
    },
  ]);

  const renderProjects = [];

  for (let i = 0; i < projects.length; i ++) {
    renderProjects.push(<ProjectCard key={projects[i].name} name={projects[i].name} desc={projects[i].desc} img={projects[i].img} tech={projects[i].tech} link={projects[i].link} />)
  }

  return (
    <section id="Skills">
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div id="projects" className={styles.projectSection}>
        {renderProjects}
        
      </div>
    </section>
  )
}

export default Skills