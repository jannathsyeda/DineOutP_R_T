import React, { useState } from "react";
import CustomerInput from "./CustomerInput";
import FoodItem from "./FoodItem";

export default function OrderCreate({
  menuItems,
  onAddToCart,
  onRemoveFromCart,
 onPlaceOrder, customerName ,setCustomerName,total
}) {

  return (
    <div class="bg-[rgba(89,86,86,0.4)] rounded-lg p-6 h-[calc(100vh_-_130px)] ">
      <h2 class="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p class="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <CustomerInput
        customerName={customerName}
        onCustomerNameChange={setCustomerName}
      />

      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Choose Items</label>
            <div class="items-container scrollbar-thin  overflow-y-auto h-64 w-full ">

        {menuItems.map((item) => (
          <FoodItem
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>
      </div>

      <button 
      onClick={onPlaceOrder}
      disabled={!customerName.trim() || total === 0}

      class="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT {total})
      </button>
    </div>
  );
}
