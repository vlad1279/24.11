import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'  
import Footer from './components/footer/Footer.jsx' 
import Home from './components/pages/home/Home.jsx' 
import About from './components/pages/about/About.jsx'
import Products from './components/pages/products/Products.jsx'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        

           {/* <Home />
          <About />
          <Products />  */}
        </main>



      <Footer /> 
     
    </>
  )
}

export default App
