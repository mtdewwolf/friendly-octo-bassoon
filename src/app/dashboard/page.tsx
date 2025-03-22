'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBox, FaFileInvoice, FaHistory, FaShoppingCart, FaTag, FaUser } from 'react-icons/fa';

// Sample data - would come from database in a real app
const recentOrders = [
  { id: 'ORD-1234', date: '2023-05-15', total: 1250.75, status: 'DELIVERED' },
  { id: 'ORD-1235', date: '2023-06-02', total: 875.50, status: 'PROCESSING' },
  { id: 'ORD-1236', date: '2023-06-10', total: 1940.25, status: 'SHIPPED' },
];

export default function WholesaleDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // This would come from your auth context
  const user = {
    name: 'Company Name',
    email: 'contact@company.com',
    accountType: 'WHOLESALE',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Wholesale Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaUser className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button
                className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium ${
                  activeTab === 'overview'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                <span className="mr-3">
                  <FaTag className="h-5 w-5" />
                </span>
                Overview
              </button>
              <button
                className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium ${
                  activeTab === 'orders'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('orders')}
              >
                <span className="mr-3">
                  <FaBox className="h-5 w-5" />
                </span>
                Orders
              </button>
              <button
                className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium ${
                  activeTab === 'catalogs'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('catalogs')}
              >
                <span className="mr-3">
                  <FaFileInvoice className="h-5 w-5" />
                </span>
                Catalogs & Pricing
              </button>
              <button
                className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium ${
                  activeTab === 'history'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('history')}
              >
                <span className="mr-3">
                  <FaHistory className="h-5 w-5" />
                </span>
                Order History
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="md:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            {activeTab === 'overview' && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-800">Overview</h2>
                
                {/* Stats */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-indigo-50 p-4">
                    <p className="text-sm font-medium text-indigo-800">Total Orders</p>
                    <p className="text-2xl font-bold text-indigo-600">12</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="text-sm font-medium text-green-800">Active Orders</p>
                    <p className="text-2xl font-bold text-green-600">2</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4">
                    <p className="text-sm font-medium text-purple-800">Total Spent</p>
                    <p className="text-2xl font-bold text-purple-600">$4,066.50</p>
                  </div>
                </div>
                
                {/* Recent Orders */}
                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-800">Recent Orders</h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Order ID
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Total
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {recentOrders.map((order) => (
                          <tr key={order.id}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-indigo-600">
                              <Link href={`/orders/${order.id}`} className="hover:underline">
                                {order.id}
                              </Link>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              {new Date(order.date).toLocaleDateString()}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              ${order.total.toFixed(2)}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                order.status === 'DELIVERED'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'SHIPPED'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="mt-8">
                  <h3 className="mb-3 text-lg font-medium text-gray-800">Quick Actions</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/products"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                      <FaShoppingCart className="mr-2 h-4 w-4" />
                      Shop Products
                    </Link>
                    <Link
                      href="/orders/new"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <FaBox className="mr-2 h-4 w-4" />
                      Place New Order
                    </Link>
                    <Link
                      href="/dashboard/account"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <FaUser className="mr-2 h-4 w-4" />
                      Account Settings
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-800">Your Orders</h2>
                <p className="text-gray-600">View and manage all your wholesale orders here.</p>
                
                {/* Order list would go here */}
                <div className="mt-6 text-center text-gray-500">
                  Full order management interface would be implemented here
                </div>
              </div>
            )}
            
            {activeTab === 'catalogs' && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-800">Wholesale Catalogs & Pricing</h2>
                <p className="text-gray-600">Access your wholesale catalogs and special pricing information.</p>
                
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="text-lg font-medium text-gray-800">Spring 2023 Catalog</h3>
                    <p className="mt-1 text-sm text-gray-600">Complete product lineup with wholesale pricing for Spring 2023.</p>
                    <button className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Download PDF
                    </button>
                  </div>
                  
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="text-lg font-medium text-gray-800">Summer 2023 Catalog</h3>
                    <p className="mt-1 text-sm text-gray-600">New product launches and updated pricing for Summer 2023.</p>
                    <button className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Download PDF
                    </button>
                  </div>
                  
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="text-lg font-medium text-gray-800">Bulk Order Discounts</h3>
                    <p className="mt-1 text-sm text-gray-600">Special pricing for larger volume orders.</p>
                    <button className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'history' && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-800">Order History</h2>
                <p className="text-gray-600">Complete history of all your past orders and transactions.</p>
                
                {/* Full order history would go here */}
                <div className="mt-6 text-center text-gray-500">
                  Complete order history interface would be implemented here
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}