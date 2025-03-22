'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

// Sample product data - in a real app, this would come from your database
const sampleProducts = {
  '1': {
    id: '1',
    name: 'Handmade Ceramic Mug',
    description: 'Beautiful handcrafted ceramic mug, perfect for your morning coffee or tea. Each mug is individually made and features a unique glaze pattern, making every piece one-of-a-kind. These mugs are microwave and dishwasher safe.',
    retailPrice: 24.99,
    wholesalePrice: 12.50,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 50,
    features: [
      'Handcrafted from premium stoneware',
      'Unique glaze finish',
      'Microwave and dishwasher safe',
      'Holds 12oz of liquid',
      'Size: 4" height x 3.5" diameter',
    ],
  },
  '2': {
    id: '2',
    name: 'Woven Wall Hanging',
    description: 'Artisanal woven wall hanging made with natural fibers and sustainable materials. This beautiful piece adds texture and warmth to any room. Each piece is handwoven by skilled artisans using traditional techniques.',
    retailPrice: 89.99,
    wholesalePrice: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 25,
    features: [
      'Handwoven using traditional techniques',
      'Made from 100% natural cotton and wool',
      'Wooden dowel included for hanging',
      'Dimensions: 24" width x 36" length',
      'Each piece is unique with slight variations',
    ],
  },
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = sampleProducts[id as keyof typeof sampleProducts];
  
  const [quantity, setQuantity] = useState(1);
  
  // This would come from your auth context in a real app
  const isWholesale = false;
  
  // Handle add to cart
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${id} to cart`);
    // This would integrate with your cart functionality
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-red-600">Product Not Found</h1>
          <p className="mb-6">The product you are looking for does not exist.</p>
          <Link
            href="/products"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const price = isWholesale ? product.wholesalePrice : product.retailPrice;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/products"
        className="mb-6 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        <FaArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>
      
      {isWholesale && (
        <div className="mb-6 rounded-md bg-indigo-50 p-4 text-center text-indigo-800">
          You are viewing wholesale pricing
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-200 md:h-[600px]">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="mb-6">
            <p className="text-3xl font-bold text-indigo-600">{formattedPrice}</p>
            {isWholesale && <p className="text-sm text-gray-600">Wholesale Price</p>}
          </div>
          
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-medium text-gray-900">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          {product.features && (
            <div className="mb-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900">Features</h2>
              <ul className="list-inside list-disc space-y-1 text-gray-700">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
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
              In Stock: {product.inventory > 10 ? 'Yes' : `Only ${product.inventory} left`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 