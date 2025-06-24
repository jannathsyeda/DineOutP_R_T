import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


export default function FoodItem({ item, onAdd, onRemove, quantity }) {
  return (
     <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center mr-3">
          <span className="text-2xl">{item.icon}</span>
        </div>
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-xs text-gray-400">BDT {item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {quantity > 0 && (
          <>
            <button
              onClick={() => onRemove(item.id)}
              className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <FaMinus className="h-4 w-4 text-red-500" />
            </button>
            <span className="text-sm font-medium min-w-[20px] text-center">{quantity}</span>
          </>
        )}
        <button
          onClick={() => onAdd(item.id)}
          className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <FaPlus className="h-4 w-4 text-green-500" />
        </button>
      </div>
    </div>
  
  )
}
