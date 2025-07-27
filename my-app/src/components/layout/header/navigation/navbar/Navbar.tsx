import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/tenses" 
              className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
            >
              Tenses
            </Link>
            <Link 
              href="/prepositions" 
              className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
            >
              Prepositions
            </Link>
            <Link
              href="/progress" 
              className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
            >
              Progress
            </Link>
          </nav>

  )
}

export default Navbar