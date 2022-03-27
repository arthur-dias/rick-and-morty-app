import React from 'react'

// Assets
import Logo from '../../assets/logo.png'

// CSS
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt='Logo' />
    </div>
  )
}

export default Header
