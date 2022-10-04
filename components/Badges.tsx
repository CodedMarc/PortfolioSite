import React from 'react'
import Image from 'next/image'
import Trophy from '../public/assets/trophy.png';
const Badges = () => {
  return (
    <div id="Badges">
      <h1>Skill Badges</h1>
      <Image src={Trophy} width='64px' height='64px' alt='trophy' />
    </div>
  )
}

export default Badges