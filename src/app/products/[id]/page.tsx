import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import ProductActions from '@/components/ProductActions';
import { Metadata } from 'next';

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

// This would come from auth context in a client component
const isWholesale = false;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const product = sampleProducts[id as keyof typeof sampleProducts];
  
  return {
    title: product ? `${product.name} | YourBrand` : 'Product Not Found | YourBrand',
    description: product?.description || 'Product not found',
  };
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = params;
  const product = sampleProducts[id as keyof typeof sampleProducts];
  
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
          
          <ProductActions id={id} inventory={product.inventory} />
        </div>
      </div>
    </div>
  );
} 