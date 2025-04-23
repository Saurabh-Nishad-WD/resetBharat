import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pro1 from "../assets/pro1.jpg"

const Navbar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProjects(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on menu link click
  const handleDropdownLinkClick = () => {
    setShowProjects(false);
  };

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="sacramento text-3xl">
          ResetBharat 🌱
        </Link>

        <ul className="flex space-x-6 items-center relative">
          {/* Projects Dropdown - Click to open */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowProjects(prev => !prev)}
              className="hover:text-green-300 cursor-pointer"
            >
              Projects
            </button>
            {showProjects && (
              <ul className="absolute top-10 left-0 bg-green-800 text-sm rounded-md shadow-lg py-2 w-44 z-50">
                <li className="px-4 py-2 hover:bg-green-600">
                  <Link to="/running-projects" onClick={handleDropdownLinkClick}>Running Projects</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-600">
                  <Link to="/completed-projects" onClick={handleDropdownLinkClick}>Completed Projects</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/future-plans" className="hover:text-green-300">Future Plans</Link>
          </li>
          <li>
            <Link to="/achievments" className="hover:text-green-300">Achievements</Link>
          </li>
          <li>
            <Link to="/joinus" className="hover:text-green-300">Join Us</Link>
          </li>
          <li>
            <Link to="/donate" className="hover:text-yellow-300 font-semibold">Donate</Link>
          </li>

          {/* User Profile Image */}
          <li>
            <Link to="/about">
            <img
              src={pro1}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-white hover:border-yellow-300 cursor-pointer"
            />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;