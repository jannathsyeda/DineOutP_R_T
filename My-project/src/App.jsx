import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import CreateOrder from './CreateOrder'
import OrderCreate from './OrderCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   {/* <CreateOrder/> */}
<OrderCreate/>   </>
  )
}

export default App
