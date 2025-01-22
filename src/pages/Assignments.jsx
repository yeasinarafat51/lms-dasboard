import List from "../components/List";

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
    </div>
  );
};

export default Assignments;
