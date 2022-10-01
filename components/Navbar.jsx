import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import pixelme from '../public/assets/pixelme.jpg'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.heading}>
        <Image priority unoptimized={true} className={styles.logoImg} width={50} height={50} alt="CodedMarc Logo" src={pixelme} />
        <h1>Marc<span>Doran</span></h1>
      </div>
      <ul className={styles.linksContainer}>
        <li><Link href="#Hero">Home</Link></li>
        <li><Link href="#Hero">Projects</Link></li>
        <li><Link href="#Hero">About Me</Link></li>
        <li><Link href="#Hero">Contact</Link></li>
      </ul>
      <div className={styles.buttonWrapper}>
        <button className={styles.contactBtn}>Contact</button>
      </div>
    </nav>
  )
}

export default Navbar