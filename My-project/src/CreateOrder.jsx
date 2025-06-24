import React, { useState } from 'react'
import {menuItems} from './MockData'
import FoodItem from './FoodItem';

export default function CreateOrder({ onPlaceOrder }){ 

  const [customerName, setCustomerName] = useState('');
  const [selectedItems, setSelectedItems] = useState({});
  console.log(selectedItems)


  const handleAddItem = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const handlePlaceOrder = () => {
    if (customerName && Object.values(selectedItems).some(qty => qty > 0)) {
      const totalItems = Object.values(selectedItems).reduce((sum, qty) => sum + qty, 0);
      const newOrder = {
        id: Date.now(),
        customerName,
        items: totalItems,
        amount: calculateTotal(),
        status: 'PENDING'
      };
      onPlaceOrder(newOrder);
      setCustomerName('');
      setSelectedItems({});
    }
  };

  return (
    <div className="bg-gray-600 bg-opacity-40 rounded-lg p-6 h-[calc(100vh-130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-white"
          placeholder="Enter customer name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="max-h-64 overflow-y-auto">
          {menuItems.map(item => (
           <FoodItem
              key={item.id}
              item={item}
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
              quantity={selectedItems[item.id] || 0}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={!customerName || !Object.values(selectedItems).some(qty => qty > 0)}
        className="w-full bg-orange-500 hover:bg-opacity-90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {calculateTotal()})
      </button>
    </div>
  )
}
