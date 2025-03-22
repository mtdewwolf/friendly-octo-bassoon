'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // This would be replaced with actual auth state
  const isLoggedIn = false;
  const isWholesale = false;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          YourBrand
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-700 hover:text-indigo-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
            </li>
            {isLoggedIn && isWholesale && (
              <li>
                <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-700 hover:text-indigo-600">
            <FaShoppingCart className="h-6 w-6" />
          </Link>
          
          {isLoggedIn ? (
            <div className="relative">
              <button 
                className="flex items-center space-x-1 rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaUser className="h-5 w-5" />
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Link 
                    href="/dashboard" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link 
                    href="/orders" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                  <button 
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      // Sign out logic would go here
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              href="/auth/login" 
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Sign In
            </Link>
          )}
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6 text-gray-700" />
            ) : (
              <HiMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="border-t border-gray-200 bg-white px-4 py-2">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="block py-2 text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              {!isLoggedIn && (
                <>
                  <li>
                    <Link 
                      href="/auth/login" 
                      className="block py-2 text-gray-700 hover:text-indigo-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/auth/register" 
                      className="block py-2 text-gray-700 hover:text-indigo-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  <li>
                    <Link 
                      href="/dashboard" 
                      className="block py-2 text-gray-700 hover:text-indigo-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/profile" 
                      className="block py-2 text-gray-700 hover:text-indigo-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/orders" 
                      className="block py-2 text-gray-700 hover:text-indigo-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <button 
                      className="block w-full py-2 text-left text-gray-700 hover:text-indigo-600"
                      onClick={() => {
                        // Sign out logic would go here
                        setIsMenuOpen(false);
                      }}
                    >
                      Sign out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
} 