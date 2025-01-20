import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import icon from '../imgs/Command.png'
import f from '../imgs/Frame 47622.png'

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="w-[335px] h-[39px] border-[#FF4B00] border-2 flex items-center rounded-md  p-2  max-w-md">
      {/* Search Icon */}
      <span className=" px-3 text-[#FF4B00]">
        <FiSearch size={20} />
      </span>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        className=" font-Inter font-[400px] text-[13px] text-[#AFAFAF] outline-none w-full px-2  "
      />
      <img className="pr-4" src={icon} alt="" />
      <img src={f} alt="" />
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
