import Footer from './components/Footer'
import Header from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Home from './components/Home'
import MainLayout from './layout/MainLayout'
import {Routes, Route} from 'react-router-dom'
import React from 'react'

function App() { 

  return (
    <>    
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
      <Footer />
     
    </>
  )
}

export default App