import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Quality Products for Retail & Wholesale
          </h1>
          <p className="mb-8 text-xl text-white/80">
            Browse our collection of handmade products available for both retail customers and wholesale partners.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-md bg-white px-8 py-3 text-lg font-medium text-indigo-600 hover:bg-gray-100"
            >
              Shop Now
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md border border-white px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Product cards will be dynamically generated here */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="relative h-64 w-full bg-gray-200">
                  {/* Placeholder for product image */}
                  <div className="flex h-full items-center justify-center">
                    <span className="text-gray-500">Product Image</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-medium text-gray-800">Product Name</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Short product description goes here.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">$29.99</span>
                    <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              About Our Products
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              All our products are handcrafted with care and attention to detail. We pride ourselves on quality materials
              and sustainable production methods. Available to both individual customers and wholesale partners.
            </p>
            <div className="flex justify-center">
              <Link
                href="/about"
                className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
