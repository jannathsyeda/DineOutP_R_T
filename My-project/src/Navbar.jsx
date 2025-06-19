import React from 'react'
import logo from './assets/logo.svg'
import userIcon from './assets/user-icon.svg'
export default function Navbar() {
  return (
   

<nav className="bg-gray-600 bg-opacity-29 rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-orange-500 mr-2">
<img src={logo} alt="" />     
     
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
<img src={logo} alt="" />     
        </div>
      </div>
    </nav>
  )
}
