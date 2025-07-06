import React, { useState } from "react";
import CustomerInput from "./CustomerInput";
import FoodItem from "./FoodItem";

export default function OrderCreate({
  menuItems,
  onAddToCart,
  onRemoveFromCart,
 onPlaceOrder, customerName ,setCustomerName,total,items
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
        disabled={!customerName || !items.some(item => item.quantity > 0)}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 rounded-lg font-medium text-lg transition-colors"
      >
        Place Order (BDT {total})
      </button>
    </div>
  );
}
