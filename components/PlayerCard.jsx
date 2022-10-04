import styles from '../styles/About.module.scss';
import Image from 'next/image';
import pixelme from '../public/assets/pixelme.svg';
const aboutMe = {
  Name: 'Marc Doran',
  Age: '23',
  Email: 'DORAMM4408@gmail.com',
  'Favorite Color': 'Purple (could you tell?)',
  Occupation: 'Full Stack Software Engineer',
  Technologies: 'JavaScript, React, Express, Node, NoSQL, SQL, SCSS, Styled Components, and more',
  yearsOfXP: '3 Years, but also created Minecraft plugins in Java when I was 14 years old.',
  Education: 'Codesmith NY Immersive Bootcamp + Some College',
  topArtists: 'Deem Spencer, Choker, and Kendrick Lamar'
}
const renderAnswers = [];

for (const question in aboutMe) {
  renderAnswers.push(
    <div key={question} className={styles.info}>
      <h1 className={styles.question}>{question}:</h1>
      <p className={styles.answer}>{aboutMe[question]}</p>
    </div>
    )
}
const PlayerCard = () => {
  return (
    <div className={styles.PlayerCard}>

        <Image unoptimized={true} width="100%" height="100%" layout="responsive" objectFit="cover" priority src={pixelme} alt='Pixel Portrait of Marc Doran' />
    
      <div className={styles.textBox}>
        {renderAnswers}
      </div>

    </div>
  )
}

export default PlayerCard