import React from 'react'
import styles from './About.module.css'
import History from '../../assets/History'
import EventCard from '../../Components/EventCard/EventCard'
const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.heading+' rale'}>About Us</div>
      <div className={styles.events}>
        {
          History.map((obj,index)=>{
            return(<EventCard key={index} obj={obj} index={index}/>)
          })
        }
      </div>
    </div>
  )
}

export default About
