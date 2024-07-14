import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { NavContext } from '../NavContext';
import { useInView } from 'react-intersection-observer';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [bg,setBg]=useState(false);
  const changeBg=()=>{
    if(window.scrollY>0)
      setBg(true)
    else
      setBg(false);
  }
  const {nav,setNav}=useContext(NavContext);
  window.addEventListener('scroll',changeBg);
  const [ref,inView]=useInView({
    triggerOnce:true,
    threshold:0.1,
  })
 return (  
    <div className={`${styles.navcont} ${bg||nav?styles.whitebg:''}`}>      
      <div className={styles.logocont}>
        <Link to="/"><img ref={ref} className={`${styles.logo} ${inView?styles.rotate:''}`} src='https://image.similarpng.com/very-thumbnail/2021/09/Pure-water-logo.png' alt="" /></Link>
        <Link to="/" className={`rale ${styles.org}`} style={{color:bg||nav?'#5EBB44':'white'}}>
            AquaHope Foundation
        </Link>
      </div>     
      <div className={styles.navitems}>
        <Link to="/"  style={{color:bg?'#4D9E37':'white',fontWeight:bg?'600':'initial'}} className={`rale ${styles.navlinks}`}>Home</Link>
        <Link to="/projects" style={{color:bg?'#4D9E37':'white',fontWeight:bg?'600':'initial'}} className={`rale ${styles.navlinks}`}>Projects</Link>
        <Link to="/contribute" style={{color:bg?'#4D9E37':'white',fontWeight:bg?'600':'initial'}} className={`rale ${styles.navlinks}`}>Get Involved</Link>
        <Link to="/contact" style={{color:bg?'#4D9E37':'white',fontWeight:bg?'600':'initial'}} className={`rale ${styles.navlinks}`}>Contact Us</Link>
        {!nav&&<MenuIcon onClick={()=>{setNav(!nav)}} style={{color:bg?'#4D9E37':'white',fontWeight:bg?'600':'initial'}} className={`${styles.smallscreen}`}/>}
        {nav&&<CloseIcon onClick={()=>{setNav(!nav)}} style={{color:bg||nav?'#4D9E37':'white',fontWeight:bg?'600':'initial'}} className={`${styles.smallscreen}`}/>}
        
      </div>
    </div>
  )
}

export default Navbar
