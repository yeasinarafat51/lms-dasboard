import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center bg-gray-100  p-2 w-full max-w-md">
      {/* Search Icon */}
      <span className="text-gray-500 px-3">
        <FiSearch size={20} />
      </span>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none w-full px-2 text-gray-700 placeholder-gray-500"
      />
    </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/students">Students</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-4 bg-blue-600 text-white shadow-md rounded-md p-4 space-y-2">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/students">Students</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
