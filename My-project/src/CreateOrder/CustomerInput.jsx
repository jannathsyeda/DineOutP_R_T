import React from "react";

export default function CustomerInput({ customerName, onCustomerNameChange }) {
  return (
    <div class="mb-4">
      <label class="block text-sm font-medium mb-2">Customer Name</label>
      <input
        type="text"
        value={customerName}
        onChange={(e)=>onCustomerNameChange(e.target.value)}
        class="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
      />
    </div>
  );
}
