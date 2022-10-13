import { useState, useEffect } from 'react'
import styles from './Skills.module.scss';
import ProjectCard from './ProjectCard';
import { Grid } from '@chakra-ui/react';
const Skills = () => {
  const [about, setAbout] = useState('About the project. What it solved. What it does. How I did it.')
  const [technologies, setTechnologies] = useState('JS');
  const [projects, setProjects] = useState([
    {
      name: 'Panoptic Beta',
      desc: "An Open Source, innovative metrics tracker for web applications that utilizes Google's Lighthouse SDK to provide metric scores for performance, speed, accessibility, and best practices per Git Commit!",

      tech: ['NextJS', 'Github OAuth', 'PassportJS', 'MongoDB Atlas', 'SCSS', 'ChartJS', 'Vercel'],
      link: 'https://panoptic.app/',
      git: 'https://github.com/CodedMarc/Panoptic'
    },
    {
      name: 'Song Palate', 
      desc: 'A web app that uses the Spotify API to allows users to connect their Spotify account and listen to their favorite music on a simplified UI. ', 
 
      tech: ['React', 'Express', 'MongoDB Atlas', 'Spotify API', 'Heroku'],
      link: 'http://SongPalate.herokuapp.com/',
      git: 'https://github.com/CodedMarc/SongPalate' 
    }, 
    {
      name: 'Cryptracker',
      desc: 'View a list of live cryptocurrency prices, market cap, trading volume, and percent change in the last 24 hours!',

      tech: ['React', 'CoinGeckoAPI', 'CSS'],
      link: 'https://CodedMarc.github.io/Cryptracker',
      git: 'https://github.com/CodedMarc/Cryptracker'
    },
    // {
    //   name: 'Coffee Shop',
    //   desc: 'A landing page built for a small coffee shop business. Simple, but elegant design.',
    //   img: CoffeePic,
    //   tech: ['HTML5', 'CSS', 'Vanilla JS'],
    //   link: '/',
    //   git: '/'
    // },
  ]);

  const renderProjects = [];

  for (let i = 0; i < projects.length; i ++) {
    renderProjects.push(<ProjectCard key={projects[i].name} name={projects[i].name} desc={projects[i].desc} tech={projects[i].tech} link={projects[i].link} git={projects[i].git}/>)
  }

  return (
    <section id="Skills">
      <h1 className={styles.sectionTitle}>Projects</h1>
      <Grid id="projects" templateColumns={{base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6} className={styles.projectSection}>
        {renderProjects}
        
      </Grid>
      <h1 style={{textAlign: 'center', marginTop: '30px', opacity: '0.5'}}>More Coming Soon...</h1>
    </section>
  )
}

export default Skills