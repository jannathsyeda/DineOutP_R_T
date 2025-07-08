import React from 'react'

export default function PendingOrders({pendingOrders}) {
  return (
 <div class="bg-[rgba(89,86,86,0.4)] rounded-lg p-4 relative overflow-hidden">
                            <div class="text-5xl font-bold text-red-500 mb-2">{pendingOrders}</div>
                            <div
                                class="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Pending
                            </div>
                        </div>  )
}
