import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'

import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
<MainContent/>
</>
  )
}

export default App
