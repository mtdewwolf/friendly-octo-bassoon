'use client';

import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

// For the wholesale flag
const isWholesale = false; // This would come from auth context in a real app

export default function ProductActions({ id, inventory }: { id: string; inventory: number }) {
  const [quantity, setQuantity] = useState(1);
  
  // Handle add to cart
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${id} to cart`);
    // This would integrate with your cart functionality
  };
  
  return (
    <>
      <div className="mb-6">
        <label htmlFor="quantity" className="mb-2 block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <div className="flex w-32 items-center border border-gray-300">
          <button
            type="button"
            className="h-10 w-10 bg-gray-100 text-gray-600 hover:bg-gray-200"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="h-10 w-full border-x border-gray-300 bg-white px-3 text-center text-gray-900"
          />
          <button
            type="button"
            className="h-10 w-10 bg-gray-100 text-gray-600 hover:bg-gray-200"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 sm:w-auto"
        >
          <FaShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </button>
        
        {isWholesale && (
          <button
            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 sm:w-auto"
          >
            Request Custom Quote
          </button>
        )}
      </div>
      
      <div className="mt-6 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-600">
          In Stock: {inventory > 10 ? 'Yes' : `Only ${inventory} left`}
        </p>
      </div>
    </>
  );
} 