import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../imgs/LOGO.png";
import dash from "../imgs/Clock.png";
import assin from "../imgs/ClipboardText.png";
import shecduale from "../imgs/Calendar2.png";
import recording from "../imgs/sms.png";
import discusion from "../imgs/sms2.png";
import resource from "../imgs/file.png";
import note from "../imgs/NoteBlank.png";
import download from "../imgs/download.png";
import classes from "../imgs/class.png";
import cource from "../imgs/course.png";
import seating from "../imgs/seating.png";
import slider from "../imgs/Slider.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:block w-64 bg-[#E4E4E4] text-[#727272]  h-screen">
        <div className="flex justify-center relative py-4 border-b-2  border-b-[#e6b6b6] pb-[25.5px]  ">
          <img className="w-[137.84px] h-[29px] " src={logo} alt="" />
          <img
            className="w-[18px] h-[18px] absolute right-[-8px] top-6 "
            src={slider}
            alt=""
          />
        </div>
        <ul className="space-y-1 p-2">
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/dashboard"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={dash} alt="" />
              Dashboard
            </NavLink>
          </li>

          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/assignments"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={assin} alt="" />
              Assignments
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/schedule"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={shecduale} alt="" />
              Schedule
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/recordings"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={recording} alt="" />
              Recordings
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/discussions"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={discusion} alt="" />
              Discussions
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/resources"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={resource} alt="" />
              Resources
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/notes"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={note} alt="" />
              Notes
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/downloads"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={download} alt="" />
              Downloads
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/courses"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={classes} alt="" />
              Classes
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/courses"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={cource} alt="" />
              Courses
            </NavLink>
          </li>
          <li className="w-[195px] h-[37px] p-2 ">
            <NavLink
              to="/settings"
              className="flex gap-2 py-2 px-4 hover:bg-[#FF4B00] font-Inter font-semibold text-[13px] hover:text-[#FFFFFF] "
            >
              <img className="text-white" src={seating} alt="" />
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
        <aside className="absolute top-0 left-0 w-64 bg-[#E4E4E4] text-black hover:text-white h-screen z-50">
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
                to="/ assignments"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Assignments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ schedule"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ recordings"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Recordings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/  discussions"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Discussions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ resources"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notes"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/downloads"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Downloads
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className="block py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Classes
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
