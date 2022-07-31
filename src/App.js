import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AboutUs from './pages/AboutUs';
import AppRouter from './routers/AppRouter';
import "./css/style1.css"

const App = () => {
   return (
  <AppRouter />
  )
}

export default App