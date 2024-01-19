import { useState } from 'react'
import React from "react"
import Header from './componenets/Header'
import './App.css'

import Main from './componenets/main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className='background-image'>
    <h1 className="main--tittle">Leverage<span id='numberColor'>2</span>Live  </h1>
    <h1 className='main--tittle'>Rebuild</h1>
      <h2 className='slogan'> We offer services that cover both credit building and repiar</h2>
      <main className='main'>
       <Main /> 
      </main>
    </div>
    
  </>
  )
}

export default App
