import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Footer from './components/footer/footer'

function App() {
  const [show, setShow] = React.useState(false)
 
  return (
    <>
    <div className='body'>
     <Header/>
    
      {/* <Hero/> */}
      <Products/>
      </div>
      <Footer/>
    </>
  )
}

export default App
