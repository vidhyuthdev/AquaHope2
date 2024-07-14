import React from 'react'
import styles from './BlogCard.module.css'
import { useInView } from 'react-intersection-observer'
const BlogCard = (props) => {
    const {ref,inView}=useInView({
        triggerOnce:true,
        threshold:0.5,
    })
  return (
    <div ref={ref} className={`${styles.cont} ${inView?styles.cardin:''}`}>
      <img src={props.obj.url} alt="" />
      <h4 className={styles.title}>{props.obj.title}</h4>
      <p>{props.obj.description}</p>
      <div className={styles.details}>
        <div className={styles.author}>
            <span>Author: {props.obj.author}</span>
            <span>Date: {props.obj.date}</span>
        </div>
        <button className={styles.but}>Read More</button>
      </div>
    </div>
  )
}

export default BlogCard
