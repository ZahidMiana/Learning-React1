import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //we sent onj or array using props
  let myObj = {
    name: "Zahid Iqbal",
    age: 24
  }

  let newArr = ["Zahid", 12, "ka hai"];

  return (
    <>
    <h1 className='bg-green-400 text-black  p-4 rounded-xl'>Tailwind Test</h1>
    <br></br>

    <Card username = "Iqra Younus" someObj= {newArr}/>
    <Card username= "Zahid Iqbal"/>
    </>
  )
}

export default App
