import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'

function App() {
  const [show, setShow] = React.useState(false)
 
  return (
    <>
    <div className='body'>
     <Header/>
    
      {/* <Hero/> */}
      <Products/>
      </div>
    </>
  )
}

export default App
