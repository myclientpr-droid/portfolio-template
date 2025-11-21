'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationWithDropdown() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Categories', 
      href: '/projects',
      dropdown: siteConfig.categories?.slice(0, 5) || []
    },
    { label: 'Blog', href: '/posts' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">NA</span>
                </div>
                <span className={`font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                  isScrolled ? '' : 'text-white'
                }`}>
                  {siteConfig.personal.name}
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
              {navItems.map((item, index) => (
                <motion.div key={item.href} className="relative" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive(item.href)
                            ? 'text-blue-600 bg-blue-50'
                            : isScrolled
                            ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                        <svg className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                            className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 py-2"
                          >
                            {item.dropdown.map((category) => (
                              <Link
                                key={category.slug}
                                href={`/categories/${category.slug}`}
                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors group"
                              >
                                <span className="text-lg mr-3">{category.icon}</span>
                                <div>
                                  <div className="font-medium">{category.name}</div>
                                  <div className="text-xs text-gray-500">{category.description}</div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : isScrolled
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.div layoutId="activeIndicator" className="absolute inset-0 bg-blue-50 rounded-lg -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 border-0 px-6"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <div className="px-4 py-3 text-sm font-medium text-gray-500 border-l-4 border-transparent">
                            {item.label}
                          </div>
                          {item.dropdown.map((category) => (
                            <Link
                              key={category.slug}
                              href={`/categories/${category.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <span className="text-lg mr-3">{category.icon}</span>
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isActive(item.href)
                              ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.1 }} className="pt-4 border-t">
                    <Button 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.location.href = '/contact';
                      }}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}