import vect from "../imgs/vetf.png";
import vect1 from "../imgs/vff.png";

const Upcoming = () => {
  return (
    <div className="w-[422px] h-[303px] bg-white rounded-lg shadow-xl overflow-hidden p-3 space-y-5">
      <p className="font-inter text-[19px] font-semibold ">Upcoming Lesson</p>

      <div className="flex items-center  gap-4 px-4 w-[390px] h-[94px]  bg-white rounded-lg shadow-md p-4 mx-auto">
        <div>
          <img src={vect} alt="" />
        </div>
        <div>
          <p className="text-[16px] font-bold font-inter text-[#1C1D1D]">
            UX Design Fundamentals
          </p>
          <p className="text-[15px] font-bold font-inter text-[#1C1D1D]">
            5:30pm
          </p>
        </div>
        <button className="text-[16px] ml-8 w-[63px] h-[28px] rounded-2xl font-bold font-inter bg-[#FF4B00] text-[#FFFFFF]">
          Join
        </button>
      </div>
      <div className="flex items-center  gap-4 px-4 w-[390px] h-[94px]  bg-white rounded-lg shadow-md p-4 mx-auto">
        <div>
          <img src={vect1} alt="" />
        </div>
        <div>
          <p className="text-[16px] font-bold font-inter text-[#1C1D1D]">
            Interaction Design
          </p>
          <p className="text-[15px] font-bold font-inter text-[#1C1D1D]">
            5:30pm
          </p>
        </div>
        <button className="text-[16px] ml-20 w-[63px] h-[28px] rounded-2xl font-bold font-inter text-[#FF4B00] bg-[#FF4B000F]">
          Join
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
