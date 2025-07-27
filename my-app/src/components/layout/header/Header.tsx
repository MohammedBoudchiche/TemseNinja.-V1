import Link from 'next/link'
import React from 'react'
import Navbar from './navigation/navbar/Navbar'
import {ThemeToggle} from '../../theme/theme-toggle'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center transition-all group-hover:rotate-12">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">TenseMaster</span>
          </Link>

          {/* Navigation */}
          <Navbar />
            <ThemeToggle />
          {/* Mobile Menu Button (Optional) */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header