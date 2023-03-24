import { Link } from 'react-router-dom'
import logoNav from '../../assets/cover.png'
import navLogo from '../../assets/nav-logo.png'

import styles from './styles.module.scss'

export function Navbar() {
  return (
    <div className={styles.navContainer}>
      <img className={styles.background} src={logoNav} alt="navbar" />
      <div className={styles.logo}> <Link to="/"><img src={navLogo} alt="logo" /></Link></div>
    </div>
  )
}