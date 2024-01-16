import { useState } from 'react'
import React from "react"
import Header from './componenets/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <h1>Hello world!</h1>
  </>
  )
}

export default App
