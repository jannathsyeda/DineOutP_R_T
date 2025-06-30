import React from "react";
import OrderCreate from "./OrderCreate";
import TotalOrder from "./TotalOrder";
import PendingOrders from "./PendingOrders";
import DeliverOrders from "./DeliverOrders";
import OrderReports from "./OrderReports";

export default function MainContent() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderCreate />

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
