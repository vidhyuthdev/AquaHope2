import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.color}/> 
        <div className={styles.mainfooter}>
            <div>Copyright © 2024 AquaHope Foundation</div>
            <div> Developed by TechNova Innovations Pvt Ltd.</div>
        </div>        
    </div>
  )
}

export default Footer
