import React, {useState} from "react";
import TotalOrder from "./TotalOrder";
import PendingOrders from "./PendingOrders";
import DeliverOrders from "./DeliverOrders";
import OrderReports from "./OrderReports";
import OrderCreate from "./CreateOrder/OrderCreate";

export default function MainContent() {
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Hamburger',
      price: 300,
      quantity: 0,
      icon: '🍔'
    },
    {
      id: 2,
      name: 'Chicken Nuggets',
      price: 300,
      quantity: 0,
      icon: '🍗'
    },
    {
      id: 3,
      name: 'Submarine Sandwich',
      price: 300,
      quantity: 0,
      icon: '🥪'
    },
    {
      id: 4,
      name: 'Pizza slices',
      price: 300,
      quantity: 0,
      icon: '🍕',
      bgColor: 'bg-yellow-600'
    }
  ]);


  const handleAddToCart = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

   const handleRemoveFromCart = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };
 const handlePlaceOrder = () => {
    const orderItems = items.filter(item => item.quantity > 0);
    if (customerName.trim() && orderItems.length > 0) {
      alert(`Order placed for ${customerName}!\nItems: ${orderItems.map(item => 
        `${item.name} x${item.quantity}`
      ).join(', ')}\nTotal: BDT ${calculateTotal()}`);
      
      // Reset form
      setCustomerName('');
      setItems(prevItems => prevItems.map(item => ({ ...item, quantity: 0 })));
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };


  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderCreate
        menuItems={items}
        customerName={customerName}
        setCustomerName={setCustomerName}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onPlaceOrder={handlePlaceOrder}
        total={calculateTotal()}
      />

      <div class="md:col-span-2 h-[calc(100vh_-_130px)]">
        <div>
          <h2 class="text-xl font-bold mb-4">Order Summary</h2>
          <div class="grid grid-cols-3 gap-4 mb-6">
            <TotalOrder />

            <PendingOrders />

            <DeliverOrders />
          </div>
        </div>

        <OrderReports />
      </div>
    </div>
  );
}
