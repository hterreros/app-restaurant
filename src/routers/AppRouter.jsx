import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import AboutUs from '../pages/AboutUs'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Homepage from '../pages/HomePage'
import Reservations from '../pages/Reservations'

const AppRouter = () => {
  return (
    <Router>
    <NavBar />
    <Routes>
     <Route path='/' element={<Homepage />} />   
     <Route path='/nosotros' element={<AboutUs />} />
     <Route path='/reservas' element={<Reservations />} />  
     <Route path='/contacto' element={<Contact />} />
     <Route path='/blog' element={<Blog />} />
    </Routes>
    <Footer />
    </Router>
  )
}

export default AppRouter