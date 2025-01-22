import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import icon from "../imgs/Command.png";
import f from "../imgs/Frame 47622.png";
import notification from "../imgs/Notifications.png";
import avatar from "../imgs/Frame 5518.png";
import { PiCaretDownBold } from "react-icons/pi";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 border-b-2 border-b-[#E4E4E4]">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-[335px] h-[39px] border-[#FF4B00] border-2 rounded-md p-2">
          <span className="px-3 text-[#FF4B00]">
            <FiSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="font-Inter font-normal text-sm text-[#AFAFAF] outline-none w-full px-2"
          />
          <img className="hidden md:block pr-4" src={icon} alt="Command Icon" />
          <img className="hidden md:block" src={f} alt="Extra Icon" />
        </div>

        {/* Icons and User Info */}
        <div className="flex items-center gap-4">
          <img
            className="w-5 h-5 md:w-auto md:h-auto"
            src={notification}
            alt="Notification Icon"
          />
          <img
            className="w-8 h-8 rounded-full"
            src={avatar}
            alt="User Avatar"
          />
          <p className="text-sm font-semibold font-Inter hidden sm:block">
            Harsh
          </p>
          <PiCaretDownBold size={18} />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
