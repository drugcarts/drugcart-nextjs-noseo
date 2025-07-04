'use client';
import { useState } from 'react';

export default function ResponsiveTabs() {
//   const [activeTab, setActiveTab] = useState('Home');
  const [activeTab, setActiveTab] = useState("success");
  const tabs = ['Home', 'Office', 'Others'];

  return (
    <>
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Tabs Container */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="font-semibold text-lg mb-2 md:mb-0">Type of Place</span>
        <div className="flex flex-wrap md:flex-nowrap space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === tab ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4 p-4 border rounded-md bg-gray-50">
        <p className="text-gray-700">
          You have selected: <span className="font-semibold">{activeTab}</span>
        </p>
      </div>

      {/* Add Button (Fixed Right) */}
      <div className="mt-4 flex justify-end">
        <button className="px-6 py-2 bg-pink-700 text-white font-semibold rounded-md">
          ADD
        </button>
      </div>
    </div>
    <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md p-4 hidden md:block">
                <ul>
                    <li 
                        className={`p-2 cursor-pointer ${activeTab === "success" ? "text-green-600 font-bold" : "text-gray-600"}`} 
                        onClick={() => setActiveTab("success")}
                    >
                        Order Success
                    </li>
                    <li 
                        className={`p-2 cursor-pointer ${activeTab === "history" ? "text-green-600 font-bold" : "text-gray-600"}`} 
                        onClick={() => setActiveTab("history")}
                    >
                        Order History
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-6">
                {activeTab === "success" && (
                    <div className="text-center bg-white p-6 rounded-lg shadow-md max-w-md">
                        <img src="/success-image.png" alt="Success" className="mx-auto w-64"/>
                        <h2 className="text-green-600 text-2xl font-bold mt-4">Woohoo, Success !</h2>
                        <p className="text-gray-600 mt-2">Your order has successfully been submitted</p>
                        <button className="mt-4 px-6 py-2 bg-pink-700 text-white rounded flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Continue Shopping
                        </button>
                    </div>
                )}

                {activeTab === "history" && (
                    <div className="text-center bg-white p-6 rounded-lg shadow-md max-w-md">
                        <h2 className="text-gray-800 text-2xl font-bold mt-4">Order History</h2>
                        <p className="text-gray-600 mt-2">No past orders found.</p>
                    </div>
                )}
            </div>
        </div>
    </>
  );
}
