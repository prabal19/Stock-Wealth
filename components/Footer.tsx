import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-white py-12">
      <div className="container mx-auto px-5 flex flex-wrap justify-between gap-y-12">
        
        {/* Left: Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              className=" w-72 ml-0 lg:ml-28" 
              width={100} 
              height={100} 
            />
          </Link>
        </div>

        {/* Right: Links grouped together */}
        <div className="w-full mr-0 lg:mr-28 md:flex-1 flex flex-wrap justify-center md:justify-end gap-12 text-center md:text-left">
          
          {/* Categories */}
          <div className="w-40 text-black">
            <h2 className="text-xl hover:text-blue-500 hover:cursor-pointer font-bold mb-3">CATEGORIES</h2>
            <nav className="space-y-2">
              <Link href="/marketPulse" className="block hover:text-blue-500 hover:cursor hover:underline">Market Pulse</Link>
              <Link href="/wealthMindset" className="block hover:text-blue-500 hover:cursor hover:underline">Wealth Mindset</Link>
              <Link href="/stockReviews" className="block hover:text-blue-500 hover:cursor hover:underline">Stock Reviews</Link>
              <Link href="/smartInvestment" className="block hover:text-blue-500 hover:cursor hover:underline">Smart Investment</Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="w-40 text-black">
            <h2 className="text-xl font-bold hover:text-blue-500 hover:cursor-pointer mb-3">QUICK LINKS</h2>
            <nav className="space-y-2">
              <Link href="/privacy" className="block hover:text-blue-500 hover:cursor hover:underline">Privacy Policy</Link>
              <Link href="/contact" className="block hover:text-blue-500 hover:cursor hover:underline">Contact Us</Link>
              <Link href="/about" className="block hover:text-blue-500 hover:cursor hover:underline">About Us</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="w-40 text-black">
            <h2 className="text-xl font-bold hover:text-blue-500 hover:cursor-pointer mb-3">LEGAL</h2>
            <nav className="space-y-2">
              <Link href="/terms" className="block hover:text-blue-500 hover:cursor hover:underline">Terms And Conditions</Link>
              <Link href="/dmca" className="block hover:text-blue-500 hover:cursor hover:underline">DMCA</Link>
              <Link href="/cookies" className="block hover:text-blue-500 hover:cursor hover:underline">Cookies Policy</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t text-black border-gray-700 pt-6 text-center text-sm ">
        2025 STOCK WEALTH | ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}

export default Footer
