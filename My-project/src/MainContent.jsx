import React, { useState } from "react";
import TotalOrder from "./TotalOrder";
import PendingOrders from "./PendingOrders";
import DeliverOrders from "./DeliverOrders";
import OrderReports from "./OrderReports";
import OrderCreate from "./CreateOrder/OrderCreate";

import Navbar from './Navbar'
export default function MainContent() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Hamburger",
      price: 300,
      quantity: 0,
      icon: "🍔",
    },
    {
      id: 2,
      name: "Chicken Nuggets",
      price: 300,
      quantity: 0,
      icon: "🍗",
    },
    {
      id: 3,
      name: "Submarine Sandwich",
      price: 300,
      quantity: 0,
      icon: "🥪",
    },
    {
      id: 4,
      name: "Pizza slices",
      price: 300,
      quantity: 0,
      icon: "🍕",
      bgColor: "bg-yellow-600",
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: 21,
      customerName: "Anis",
      items: 5,
      amount: 123123,
      status: "PENDING",
    },
    {
      id: 22,
      customerName: "Amit",
      items: 5,
      amount: 123123,
      status: "DELIVERED",
    },
    {
      id: 23,
      customerName: "Omit",
      items: 5,
      amount: 123123,
      status: "PENDING",
    },
    {
      id: 24,
      customerName: "MD Salahuddin",
      items: 5,
      amount: 123123,
      status: "PENDING",
    },
    {
      id: 25,
      customerName: "Ferdous",
      items: 5,
      amount: 123123,
      status: "PENDING",
    },
    {
      id: 26,
      customerName: "Rafe",
      items: 5,
      amount: 123123,
      status: "PENDING",
    },
    {
      id: 27,
      customerName: "Sarwar",
      items: 5,
      amount: 123123,
      status: "PENDING",
    },
    {
      id: 28,
      customerName: "Obaidul",
      items: 5,
      amount: 123123,
      status: "DELIVERED",
    },
  ]);

  const [customerName, setCustomerName] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddToCart = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveFromCart = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order) => order.status === "PENDING"
  ).length;
  const deliveredOrders = orders.filter(
    (order) => order.status === "DELIVERED"
  ).length;
  const totalOrderValue = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (customerName && items.some((item) => item.quantity > 0)) {
      const newOrder = {
        id: crypto.randomUUID(),
        customerName,
        items: items.reduce((sum, item) => sum + item.quantity, 0),
        amount: totalOrderValue,
        status: "PENDING",
      };
      setOrders([newOrder, ...orders]);
      setCustomerName("");
      setItems(items.map((item) => ({ ...item, quantity: 0 })));
    }
  };
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDeliverOrder = (orderId) => {
    const newOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "DELIVERED" } : order
    );
    setOrders(newOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  };

  return (
        <div class="container mx-auto px-4 h-screen flex flex-col">
          <Navbar/>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderCreate
        menuItems={items}
        customerName={customerName}
        setCustomerName={setCustomerName}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onPlaceOrder={handlePlaceOrder}
        total={calculateTotal()}
        items={items}
      />

      <div class="md:col-span-2 h-[calc(100vh_-_130px)]">
        <div>
          <h2 class="text-xl font-bold mb-4">Order Summary</h2>
          <div class="grid grid-cols-3 gap-4 mb-6">
            <TotalOrder totalOrders={totalOrders} />

            <PendingOrders pendingOrders={pendingOrders} />

            <DeliverOrders deliveredOrders={deliveredOrders} />
          </div>
        </div>

        <OrderReports
          filter={filter}
          orders={orders}
          setFilter={setFilter}
          handleDeleteOrder={handleDeleteOrder}
          handleDeliverOrder={handleDeliverOrder}
        />
      </div>
    </div>
  </div>);
}
