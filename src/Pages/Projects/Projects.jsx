import React, { useContext, useState } from 'react'
import { NavContext } from '../../Components/NavContext'
import NavPopUp from '../../Components/NavPopUp/NavPopUp'
import styles from './Projects.module.css'
import ProjectList from '../../assets/ProjectList'
import { Link } from 'react-router-dom'
const Projects = () => {
    const {nav,setNav}=useContext(NavContext);
    const [year,setYear]=useState('all');
  return (
    <>
    <div className={styles.container}>
      <h1>Recent Projects</h1>       
    </div>
    <div className={styles.projects}>
      <h3>Select Year</h3>
      <select onChange={(e)=>{setYear(e.target.value)}} name="year" id="">
        <option value="all">All</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        
      </select>
      <div className={styles.grid}>
        {
          ProjectList.map((obj,ind)=>{
            if(year=='all'||year==obj.year)
            {
            return(
              <Link to={`/projects/${ind}`}>
                <div key={ind} className={styles.event}>
                  <img src={obj.images[0]} alt="" />
                  <p>{obj.title}</p>
                  <p style={{color:obj.status=='Completed'?'green':'orange'}}>{obj.status}</p>
                </div>
              </Link>
            )}
            else
            return(<></>)
          })
        }
      </div>

    </div>
    {nav&&<NavPopUp/>}
    </>
  )
}

export default Projects
