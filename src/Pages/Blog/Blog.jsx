import React from 'react'
import styles from './Blog.module.css'
import BlogData from '../../assets/BlogData'
import BlogCard from '../../Components/BlogCard/BlogCard'
const Blog = () => {
  return (
    <div className={styles.container}>
        <h3>Latest News</h3>
        <div className={styles.blogcont}>
            {
                BlogData.map((obj,ind)=>{
                    return(
                        <BlogCard obj={obj} key={ind}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Blog
