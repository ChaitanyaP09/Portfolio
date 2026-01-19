import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavMob = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation settings
  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    // 'md:hidden': This makes it visible on mobile, invisible on desktop
    <nav className="md:hidden fixed top-0 w-full z-50 bg-gray-900 border-b border-gray-800">
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Mobile Logo */}
        <h1 className="text-xl font-bold text-white">
          Chaitanya<span className="text-blue-500">Puranik</span>
        </h1>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-20"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={toggleMenu} // Close menu on click
                  className="text-2xl font-bold text-gray-300 hover:text-blue-500 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavMob;