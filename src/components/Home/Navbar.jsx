import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaCartPlus, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from './ThemeContext'; // Adjust the path as needed

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);
  const searchRef = useRef(null);
  const userRef = useRef(null);
  const cartRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const toggleSearchBar = () => setSearchBarVisible(prev => !prev);
  const toggleCart = () => setCartVisible(prev => !prev);

  const handleClickOutside = (event) => {
    const isOutsideClick = [
      searchRef.current,
      userRef.current,
      cartRef.current,
    ].every(ref => ref && !ref.contains(event.target));

    if (isOutsideClick) {
      setSearchBarVisible(false);
      setDropdownOpen(false);
      setCartVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/queries", label: "Queries" },
    { to: "/feedback", label: "Feedback" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <div className={`fixed inset-0 flex justify-between items-center h-[80px] px-4 z-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500'}`}>
      {/* Logo Section */}
      <div className="lg:w-[80px] ml-4">
        <img src="https://images.vexels.com/content/249310/preview/beer-bottle-drink-badge-c46972.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-4 text-base pl-[400px]">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`relative group px-2 py-1 rounded-md transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'} hover:bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 group-hover:text-yellow-400`}
            >
              {label}
              <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-xl">
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-200" />}
        </button>

        {/* Search Bar */}
        <div className="relative" ref={searchRef}>
          <button
            onClick={toggleSearchBar}
            className={`text-xl mt-2 transition duration-300 ${isDarkMode ? 'text-gray-200' : 'text-white'}`}
          >
            <FaSearch />
          </button>
          {isSearchBarVisible && (
            <div className="absolute top-full right-10 mt-2 w-[200px] bg-white text-gray-800 rounded-lg shadow-lg z-20">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-3xl pl-10 py-2 outline-none"
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-[16px]" />
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="relative" ref={cartRef}>
          <button onClick={toggleCart} className={`text-xl hover:text-gray-200 transition duration-300 ${isDarkMode ? 'text-gray-200' : 'text-white'}`}>
            <FaCartPlus />
          </button>
          {isCartVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-20 p-4">
              <h3 className="font-semibold mb-2">Cart Items</h3>
              <p>Your cart is empty.</p>
              <Link to="/checkout" className="block mt-2 text-blue-500 hover:underline">Checkout</Link>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="relative" ref={userRef}>
          <button
            onClick={toggleDropdown}
            className={`flex items-center text-xl hover:text-gray-200 transition duration-300 ${isDarkMode ? 'text-gray-200' : 'text-white'}`}
          >
            <FaUser />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-20">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
