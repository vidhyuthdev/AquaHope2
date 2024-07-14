import React, { useContext } from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Blog from '../Blog/Blog'
import { NavContext } from '../../Components/NavContext'
import { Dialog,DialogContent } from '@mui/material'
import NavPopUp from '../../Components/NavPopUp/NavPopUp'
const Landing = () => {
  const{nav,setNav}=useContext(NavContext)
  return (
    <div>
      <Hero/>
      <About/>
      <Blog/>
      {
        nav&&
        <NavPopUp/>
      }
    </div>
  )
}

export default Landing
