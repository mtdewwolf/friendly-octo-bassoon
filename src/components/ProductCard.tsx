'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  retailPrice: number;
  wholesalePrice: number;
  imageUrl: string;
  isWholesale?: boolean;
}

export default function ProductCard({
  id,
  name,
  description,
  retailPrice,
  wholesalePrice,
  imageUrl,
  isWholesale = false,
}: ProductCardProps) {
  // Handle add to cart
  const handleAddToCart = () => {
    // This would integrate with your cart functionality
    console.log(`Added product ${id} to cart`);
  };

  const price = isWholesale ? wholesalePrice : retailPrice;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${id}`} className="block">
        <div className="relative h-64 w-full overflow-hidden bg-gray-200">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${id}`} className="block">
          <h3 className="mb-2 text-lg font-medium text-gray-800 hover:text-indigo-600">{name}</h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-indigo-600">{formattedPrice}</span>
            {isWholesale && (
              <span className="text-xs text-gray-500">Wholesale Price</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <FaShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 