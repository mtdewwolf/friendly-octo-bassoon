'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

// Sample product data - in a real app, this would come from your database
const sampleProducts = [
  {
    id: '1',
    name: 'Handmade Ceramic Mug',
    description: 'Beautiful handcrafted ceramic mug, perfect for your morning coffee or tea.',
    retailPrice: 24.99,
    wholesalePrice: 12.50,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 50,
  },
  {
    id: '2',
    name: 'Woven Wall Hanging',
    description: 'Artisanal woven wall hanging made with natural fibers and sustainable materials.',
    retailPrice: 89.99,
    wholesalePrice: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 25,
  },
  {
    id: '3',
    name: 'Hand-poured Soy Candle',
    description: 'Eco-friendly soy candle with essential oils for a calming atmosphere.',
    retailPrice: 18.99,
    wholesalePrice: 9.50,
    imageUrl: 'https://images.unsplash.com/photo-1603006905393-c78b537bc42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 100,
  },
  {
    id: '4',
    name: 'Leather Journal',
    description: 'Handcrafted leather journal with recycled paper pages, perfect for sketching or writing.',
    retailPrice: 34.99,
    wholesalePrice: 17.50,
    imageUrl: 'https://images.unsplash.com/photo-1544113565-d04981324ee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 30,
  },
  {
    id: '5',
    name: 'Macrame Plant Hanger',
    description: 'Beautifully crafted macrame plant hanger for your indoor garden.',
    retailPrice: 29.99,
    wholesalePrice: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1620131848038-8abb259c6e79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 40,
  },
  {
    id: '6',
    name: 'Wooden Cutting Board',
    description: 'Solid wood cutting board, handmade from sustainable materials.',
    retailPrice: 49.99,
    wholesalePrice: 25.00,
    imageUrl: 'https://images.unsplash.com/photo-1596467173773-87e8eeaf4d93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inventory: 20,
  },
];

const categories = [
  'All',
  'Home Decor',
  'Kitchen',
  'Bath',
  'Accessories',
  'Gifts',
];

export default function ProductsPage() {
  // In a real application, you would get the user type from your auth context
  const isWholesale = false;
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // This would be a filter based on the actual product categories
  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Our Products
      </h1>
      
      {/* Categories Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Display Pricing Mode */}
      {isWholesale && (
        <div className="mb-6 rounded-md bg-indigo-50 p-4 text-center text-indigo-800">
          You are viewing wholesale pricing
        </div>
      )}
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            retailPrice={product.retailPrice}
            wholesalePrice={product.wholesalePrice}
            imageUrl={product.imageUrl}
            isWholesale={isWholesale}
          />
        ))}
      </div>
    </div>
  );
} 