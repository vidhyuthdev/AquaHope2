import React, { useContext } from 'react'
import { NavContext } from '../../Components/NavContext'
import NavPopUp from '../../Components/NavPopUp/NavPopUp'
const Projects = () => {
    const {nav,setNav}=useContext(NavContext)
  return (
    <div>
      {nav&&<NavPopUp/>}
    </div>
  )
}

export default Projects
