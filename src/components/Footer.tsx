import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="mb-8 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold">YourBrand</h2>
            <p className="mb-4 text-gray-300">
              Quality handcrafted products for both retail and wholesale customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 transition-colors hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 transition-colors hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/new" className="text-gray-300 transition-colors hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products/featured" className="text-gray-300 transition-colors hover:text-white">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/products/sale" className="text-gray-300 transition-colors hover:text-white">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="text-gray-300 transition-colors hover:text-white">
                  Wholesale Information
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 transition-colors hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 transition-colors hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 