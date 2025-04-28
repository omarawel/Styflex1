import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="https://via.placeholder.com/150x50?text=Styflex+Logo" alt="Styflex Düsseldorf Logo" className="h-10" />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition">Home</Link>
          <Link to="/salons" className="text-gray-700 hover:text-purple-600 font-medium transition">Salons</Link>
          <Link to="/shop" className="text-gray-700 hover:text-purple-600 font-medium transition">Shop</Link>
          <Link to="/plans" className="text-gray-700 hover:text-purple-600 font-medium transition">Abonnements</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition">Kontakt</Link>
        </nav>
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden bg-white shadow-md overflow-hidden"
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/salons" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>Salons</Link>
            <Link to="/shop" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link to="/plans" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>Abonnements</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>Kontakt</Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
