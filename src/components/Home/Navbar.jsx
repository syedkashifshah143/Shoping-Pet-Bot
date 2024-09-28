import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const searchRef = useRef(null);
  const userRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleSearchBar = () => setSearchBarVisible(!isSearchBarVisible);

  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      userRef.current &&
      !userRef.current.contains(event.target)
    ) {
      setSearchBarVisible(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex justify-between items-center h-[80px] px-4 z-10">
      {/* Logo Section */}
      <div className="lg:w-[80px] ml-4">
        <img src="https://images.vexels.com/content/249310/preview/beer-bottle-drink-badge-c46972.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-4 text-base pl-[400px]">
        <li>
          <Link to="/" className="relative group px-2 py-1 rounded-md transition-colors duration-300 text-white hover:bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 group-hover:text-yellow-400">
            Home
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="relative group px-2 py-1 rounded-md transition-colors duration-300 text-white hover:bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 group-hover:text-yellow-400">
            About Us
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="relative group px-2 py-1 rounded-md transition-colors duration-300 text-white hover:bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 group-hover:text-yellow-400">
            Gallery
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link to="/link" className="relative group px-2 py-1 rounded-md transition-colors duration-300 text-white hover:bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 group-hover:text-yellow-400">
            Queries
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="relative group px-2 py-1 rounded-md transition-colors duration-300 text-white hover:bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 group-hover:text-yellow-400">
            Feedback
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="relative group px-2 py-1 rounded-md transition-colors duration-300 text-white hover:bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 group-hover:text-yellow-400">
            Contact Us
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative" ref={searchRef}>
          <button
            onClick={toggleSearchBar}
            className="text-white text-xl mt-2 hover:text-gray-200 transition duration-300"
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
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-[16px] mt-[2px]" />
            </div>
          )}
        </div>
        <Link to="/addtocart">
          <FaCartPlus className="text-white text-xl hover:text-gray-200 transition duration-300" />
        </Link>

        <div className="relative" ref={userRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center text-white text-xl hover:text-gray-200 transition duration-300"
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
