import  { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../imgs/LOGO.png";
import dash from "../imgs/Clock.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:block w-64 bg-[#E4E4E4] text-[#727272] h-screen">
     <div className="flex justify-center py-4 ">
     <img className="w-[137.84px] h-[29px]"  src={logo} alt="" />
     </div>
        <ul className="space-y-1 p-2">
       
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/dashboard" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
              Dashboard
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/dashboard" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
              Dashboard
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/assignments" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Assignments
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/recordings" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Recordings
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/discussions" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Discussions
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/resources" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Resources
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/notes" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Notes
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/downloads" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Downloads
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/courses" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Classes
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/courses" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Courses
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink to="/settings" className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-[500px] text-[13px] hover:text-[#FFFFFF] ">
            <img className="text-white" src={dash} alt="" />
            Settings
            </NavLink>
          </li>
         
        </ul>
      </aside>

      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden bg-gray-800 text-white">
        <button
          className="p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Collapsible Sidebar */}
      {isOpen && (
        <aside className="absolute top-0 left-0 w-64 bg-gray-800 text-white h-screen z-50">
          <ul className="space-y-4 p-4">
            <li>
              <NavLink
                to="/dashboard"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
