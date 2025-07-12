'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('')
  };

  return (
    <section className="bg-gray-100 max-w-3xl lg:ml-48 mt-8 text-gray-900 py-10 px-2 sm:px-8 lg:px-10  rounded-2xl shadow-md">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-base sm:text-lg mb-2">
          Subscribe to our email newsletter to get the latest posts
        </p>
        <p className="text-base sm:text-lg mb-6">
          delivered right to your inbox
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-0">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full sm:flex-1 lg:ml-44 bg-white border border-gray-300 px-4 py-3 rounded-lg sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto hover:cursor-pointer bg-blue-600 hover:bg-blue-700 lg:mr-32 text-white px-6 py-3 rounded-lg sm:rounded-l-none font-semibold transition duration-300"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
