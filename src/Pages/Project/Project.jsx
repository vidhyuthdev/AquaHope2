import React from 'react'
import { useParams } from 'react-router-dom';
import ProjectList from '../../assets/ProjectList';
import { useContext } from 'react';
import {NavContext} from '../../Components/NavContext'
import NavPopUp from '../../Components/NavPopUp/NavPopUp'
import styles from './Project.module.css'
const Project = () => {
  const {nav,setNav}=useContext(NavContext)
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <>
    <div className={styles.container}>      
      <div className={styles.overlay}>      
        <h2>{project.title}</h2>  
      </div>      
    </div>
    <div className={styles.content}>
     <div className={styles.imgholder}>
      <img src={project.images[1]} alt="" />
     </div>
     <div className={styles.status}>
     {project.status === 'Completed' && `Completed in ${project.year}`}
     {project.status === 'Ongoing' && `Ongoing since ${project.year}`}

     </div>
     <div className={styles.status}>
      {project.description
      }
     </div>
     <div className={styles.detailed}>
      {project.detailedDescription}
     </div>
    </div>
    {nav&&<NavPopUp/>}
    </>
  )
}

export default Project
