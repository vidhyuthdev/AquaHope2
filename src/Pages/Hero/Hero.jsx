import React, { useContext, useState } from 'react'
import styles from './Hero.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { NavContext } from '../../Components/NavContext'
import NavPopUp from '../../Components/NavPopUp/NavPopUp'
const Hero = () => {
  const [typeEffect]=useTypewriter({
    words:['Empowerement','Sustainability','Health','Responsibility'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:50,
  })
  const {nav,setNav}=useContext(NavContext);
 
  return (
    <div className={styles.herocont}>      
      <div className={styles.overlay}>
        <div style={{opacity:'0',height:'2px'}}>a</div>
        <div className={styles.hero2}>
          <h1 className={`rale ${styles.heading1}`}>AquaHope Foundation</h1>
          <div className={styles.type}>
            <span className={styles.principles+" rale"}>Our Core Principles :</span><span className={styles.typewriting+' rale'}>{typeEffect}</span>
          </div>
          <div className={styles.desc+' rale'}>
          Aquahope is dedicated to aquatic conservation and ecosystem restoration. As a non-profit organization, Aquahope emphasizes impactful and tangible outcomes in its conservation initiatives. Join Aquahope to volunteer for our oceans and freshwater habitats, contributing towards a sustainable future for aquatic environments.
          </div>
        </div>
        
      </div>
      {/* <div style={{backgroundColor:'#E0F7E0',height:'100vh',color:'#003C62',fontWeight:'900',textAlign:'center',fontSize:'30px'}}>bgfwuiertfbiuwenfiu</div> */}
    </div>
  )
}
export default Hero
