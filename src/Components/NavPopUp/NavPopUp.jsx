import React, { useContext } from 'react'
import styles from './NavPopUp.module.css'
import { Link } from 'react-router-dom'
import { NavContext } from '../NavContext'
const NavPopUp = () => {
    const {nav,setNav}=useContext(NavContext);
    return (
    <div className={styles.nav}>
          <div onClick={()=>{setNav(!nav);}} className={styles.navleft}></div>
          <div className={styles.navright}>
            <Link onClick={()=>{setNav(false)}} className='rale' to='/'>Home</Link>
            <Link onClick={()=>{setNav(false)}} className='rale' to='/projects'>Projects</Link>
            <Link onClick={()=>{setNav(false)}} className='rale' to='/contribute'>Get Involved</Link>
            <Link onClick={()=>{setNav(false)}} className='rale' to='/contact'>Contact Us</Link>
          </div>
    </div>
  )
}

export default NavPopUp
