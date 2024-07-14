import React from 'react'
import Landing from './Pages/Landing/Landing'
import Navbar from './Components/Navbar/Navbar'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import { NavProvider } from './Components/NavContext'
import NavPopUp from './Components/NavPopUp/NavPopUp'
import Projects from './Pages/Projects/Projects'
import Contribute from './Pages/Contribute/Contribute'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
const App = () => {
  return (
    <BrowserRouter>
    <NavProvider>
      <Navbar/>      
      <Routes>          
        <Route path='/' element={<Landing/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contribute' element={<Contribute/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </NavProvider>
    </BrowserRouter>
  )
}

export default App
