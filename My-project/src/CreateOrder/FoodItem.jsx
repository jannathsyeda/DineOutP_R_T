import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function FoodItem({ item, onAddToCart, onRemoveFromCart }) { 
   const isSelected = item.quantity > 0;

  return (
      <div class="bg-[#36383c] bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
        <div class="flex items-center">
          <div class="w-12 h-12   flex items-center justify-center mr-3">
            {item.icon}
          </div>
          <div>
            <h3 class="font-medium">{item.name}</h3>
            <p class="text-xs text-gray-400">BDT {item.price} </p>
          </div>
        </div>

        { isSelected && (<>
          <>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="min-w-[24px] text-center text-sm font-medium bg-gray-600 rounded px-2 py-1">{item.quantity}</span>
          </>
        </>) }

        <button
          onClick={() => onAddToCart(item.id)}
          className="w-8 h-8 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
        
      </div>

     

   

  
  );
}
