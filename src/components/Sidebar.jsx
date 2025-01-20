import { NavLink } from "react-router-dom";
import logo from "../imgs/LOGO.png";
import dash from "../imgs/Clock.png";

const Sidebar = () => (
  <aside className="w-64 bg-[#E4E4E4] text-[#727272] h-screen  ">
    <ul className="space-y-4 p-4">
      <img src={logo} alt="" />
      <li>
        <NavLink
          to="/dashboard"
          className=" flex py-2 gap-2 px-4 rounded hover:bg-[#FF4B00] font-[500px] hover:text-[#FFFFFF] "
        >
          <img src={dash} alt="" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/students"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Students
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Settings
        </NavLink>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
