'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('retail');
  const [companyInfo, setCompanyInfo] = useState('');
  const [taxId, setTaxId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      // This would be replaced with actual registration logic
      console.log('Registration attempt with:', { 
        name, 
        email, 
        password, 
        accountType,
        ...(accountType === 'wholesale' && { companyInfo, taxId })
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect after successful registration
      window.location.href = '/auth/login';
    } catch (err) {
      setError('Failed to create account');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in to an existing account
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="retail"
                    name="account-type"
                    type="radio"
                    value="retail"
                    checked={accountType === 'retail'}
                    onChange={() => setAccountType('retail')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="retail" className="ml-3 block text-sm font-medium text-gray-700">
                    Retail Customer (Individual)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="wholesale"
                    name="account-type"
                    type="radio"
                    value="wholesale"
                    checked={accountType === 'wholesale'}
                    onChange={() => setAccountType('wholesale')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="wholesale" className="ml-3 block text-sm font-medium text-gray-700">
                    Wholesale Customer (Business)
                  </label>
                </div>
              </div>
            </div>
            
            {accountType === 'wholesale' && (
              <>
                <div>
                  <label htmlFor="company-info" className="block text-sm font-medium text-gray-700">
                    Company Information
                  </label>
                  <textarea
                    id="company-info"
                    name="company-info"
                    rows={3}
                    required
                    value={companyInfo}
                    onChange={(e) => setCompanyInfo(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Company name, address, and business details"
                  />
                </div>
                
                <div>
                  <label htmlFor="tax-id" className="block text-sm font-medium text-gray-700">
                    Tax ID / Business License Number
                  </label>
                  <input
                    id="tax-id"
                    name="tax-id"
                    type="text"
                    required
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Tax ID or Business License Number"
                  />
                </div>
              </>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 