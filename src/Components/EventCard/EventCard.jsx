import React from 'react'
import styles from './EventCard.module.css'
import { useInView } from "react-intersection-observer";

const EventCard = (props) => {
    const {ref,inView}=useInView({
        triggerOnce:true,
        threshold:0.2,
    })
  return (
    <div ref={ref} key={props.index} className={`${props.index % 2 === 0 ? styles.event : styles.oddevent} ${inView ? styles.fadein : ''} ${styles.card}`}>
              {  (props.index%2==0)&&
                <>
                  <img className={styles.pic} src={props.obj.url} alt="" srcset="" />
                  <div className={styles.eventdesc+" rale"}>
                      <h3>{props.obj.year}</h3>
                    <div className={styles.eventdesctext+' rale'}>
                      {props.obj.desc}
                    </div>
                  </div>
                </>
              }
              {  (props.index%2!=0)&&
                <>
                  <div className={styles.eventdesc+" rale"}>
                      <h3>{props.obj.year}</h3>
                    <div className={styles.eventdesctext+' rale'}>
                      {props.obj.desc}
                    </div>
                  </div>
                  <img className={styles.pic} src={props.obj.url} alt="" srcset="" />                  
                </>
              }
     </div>
  )
}

export default EventCard
