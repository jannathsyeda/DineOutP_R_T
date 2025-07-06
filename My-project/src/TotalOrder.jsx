import React from 'react'

export default function TotalOrder({totalOrders}) {
  return (
      <div class="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                            <div class="text-5xl font-bold text-yellow-500 mb-2">{totalOrders}</div>
                            <div
                                class="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Total Order
                            </div>
                        </div>
  )
}
