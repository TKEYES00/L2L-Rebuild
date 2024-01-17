import { useState } from 'react'
import React from "react"
import Header from './componenets/Header'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    
    <main className='main'>
    <h1 className="maintittle">Leverage 2 Live Rebuild</h1>
      <div main--info>
        <h3 className='slogan'>sdsdtsdgsdgsdf</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla p</p>
      </div>  
      <div main--animation>
        <h1>This is filler for the credit score animation</h1>
      </div>
    </main>
    
  </>
  )
}

export default App
