import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import './index.css'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Products from './components/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/products' element={<Products />} ></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
