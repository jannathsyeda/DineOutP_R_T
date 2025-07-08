import React from 'react'

export default function DeliverOrders({deliveredOrders}) {
  return (
      <div class="bg-[rgba(89,86,86,0.4)] rounded-lg p-4 relative overflow-hidden">
                            <div class="text-5xl font-bold text-green-500 mb-2">{deliveredOrders}</div>
                            <div
                                class="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Delivered
                            </div>
                        </div>
  )
}
