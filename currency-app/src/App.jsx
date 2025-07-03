import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'

function App() {

  return (
    <div className="bg-[url(./images/bg1.jpg)] bg-cover bg-center h-screen flex items-center justify-center">
      <Currency />
    </div>
  )
}

export default App
