import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiUser,
  FiHome,
  FiEye,
  FiFileText,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-950 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="brand-gradient text-white rounded-full p-2 mr-2">
              <FiEye className="text-2xl" />
            </div>
            <span className="text-xl font-bold text-gray-100">
              EyeFocus Opticals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="flex items-center text-gray-100 hover:text-indigo-600"
            >
              <FiHome className="mr-1" /> Home
            </Link>
            <Link
              to="/contact"
              className="flex items-center text-gray-100 hover:text-indigo-600 "
            >
              <FiMail className="mr-1" /> Contact Us
            </Link>
            <Link
              to="/privacy-policy"
              className="flex items-center text-gray-100 hover:text-indigo-600 "
            >
              <FiFileText className="mr-1" /> Privay Policy
            </Link>

            <Link
              to="/"
              className="flex items-center text-gray-100 hover:text-indigo-600"
            >
              <FiUser className="mr-1" /> About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block px-2 py-1 text-gray-100 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              <FiHome className="inline mr-2" /> Home
            </Link>
            <Link
              to="/contact"
              className="block px-2 py-1 text-gray-100 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              <FiMail className="inline mr-2" /> Contact
            </Link>
            <Link
              to="/privacy-policy"
              className="block px-2 py-1 text-gray-100 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              <FiFileText className="inline mr-2" /> Privacy Policy
            </Link>

            <Link
              to="/"
              className="block px-2 py-1 text-gray-100 hover:text-indigo-600"
              onClick={toggleMenu}
            >
              <FiUser className="inline mr-2" /> About Us
            </Link>
            <div className="pt-2">
              <a
                href="tel:9988776655"
                className="flex items-center px-2 py-1 text-gray-100 hover:text-indigo-600"
              >
                <FiPhone className="mr-2" /> Call: 9988776655
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
