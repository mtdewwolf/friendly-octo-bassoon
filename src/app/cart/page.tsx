'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

// Sample cart data - would come from database or local storage in a real app
const initialCart = {
  items: [
    {
      id: '1',
      name: 'Handmade Ceramic Mug',
      description: 'Beautiful handcrafted ceramic mug',
      price: 24.99, // This would be retail or wholesale price based on user type
      quantity: 2,
      imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      name: 'Hand-poured Soy Candle',
      description: 'Eco-friendly soy candle with essential oils',
      price: 18.99,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1603006905393-c78b537bc42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ],
};

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [isWholesale, setIsWholesale] = useState(false); // This would come from auth context
  
  // Calculate cart totals
  const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;
  
  // Update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart({
      ...cart,
      items: cart.items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ),
    });
  };
  
  // Remove item from cart
  const removeItem = (id: string) => {
    setCart({
      ...cart,
      items: cart.items.filter(item => item.id !== id),
    });
  };
  
  // Handle checkout
  const handleCheckout = () => {
    // This would integrate with your payment processing
    console.log('Proceeding to checkout with items:', cart.items);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Your Cart</h1>
      
      {isWholesale && (
        <div className="mb-6 rounded-md bg-indigo-50 p-4 text-center text-indigo-800">
          You are viewing wholesale pricing
        </div>
      )}
      
      {cart.items.length === 0 ? (
        <div className="py-8 text-center">
          <p className="mb-4 text-xl text-gray-600">Your cart is empty</p>
          <Link
            href="/products"
            className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            <FaArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <ul className="divide-y divide-gray-200">
                {cart.items.map((item) => (
                  <li key={item.id} className="flex p-4 sm:p-6">
                    <div className="mr-6 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      {item.imageUrl ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-100">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800">
                            <Link href={`/products/${item.id}`} className="hover:text-indigo-600">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        </div>
                        <p className="text-right text-lg font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-gray-200">
                          <button
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-10 border-x border-gray-200 px-2 py-1 text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          className="flex items-center text-sm text-red-600 hover:text-red-500"
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTrash className="mr-1 h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                <Link
                  href="/products"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <FaArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Tax</dt>
                    <dd className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-base font-medium text-gray-900">Order Total</dt>
                      <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <button
                  onClick={handleCheckout}
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 