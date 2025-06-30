import React from 'react'
import FoodItem from './FoodItem'

export default function OrderCreate() {
  return (
        <div class="bg-[rgba(89,86,86,0.4)] rounded-lg p-6 h-[calc(100vh_-_130px)] ">
                <h2 class="text-xl font-bold mb-1">CREATE ORDER</h2>
              <p class="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                    understanding of their requirements.</p>

                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">Customer Name</label>
                    <input type="text"
                        class="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"/>
                </div>

                <div class="mb-4" >
                    <label class="block text-sm font-medium mb-2">Choose Items</label>
                    <FoodItem/>
                </div>

                <button
                    class="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    Place Order (BDT 100)
                </button>
            </div>
  )
}
