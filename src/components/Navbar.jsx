import { useState } from "react";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">LMS Dashboard</h1>

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
