import List from "../components/List";
import Pagination from "../components/Pregination";
import { FaChevronDown } from "react-icons/fa";

import search from "../imgs/Frame 1000001987.png";

const Assignments = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-[#211C37] font-inter text-[32px] font-bold">
            Assignments
          </p>
          <p className="text-[#85878D] font-inter text-[20px] font-semibold">
            View and manage your course assignments
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-[48px] h-[47px]" src={search} alt="" />
          <p className="text-[#85878D] font-inter text-[16px] font-semibold">
            Filter by <span className="text-[#FF4B00]">dates</span> |
            <span className="text-[#FF4B00]"> Status</span>
          </p>
        </div>
      </div>
      <List />
    <div className="flex gap-12 items-center ">
    <div className="flex items-center gap-2 mr-3">
        <p className="text-[13px] font-inter font-bold ">Show</p>
        <button  className="flex items-center gap-2 shadow-md bottom-2 rounded-md p-2 justify-center w-[68px] h-[39px] text-[13px] font-inter font-bold "><span>10</span> <FaChevronDown /></button>
        <p className="text-[13px] font-inter font-bold ">Row</p>
      </div>
      <Pagination/>
    </div>
    </div>
  );
};

export default Assignments;
