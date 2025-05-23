import { Carousel } from './components/Carousel'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './components/Navbar'
import MainLayout from './layout/MainLayout'
import React from 'react'

function App() { 

  return (
    <>
        
        <Header />
        <MainLayout>
          <Carousel />
          {/* <Hero /> */}
        </MainLayout>
        <Footer />
     
    </>
  )
}

export default App