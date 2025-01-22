import search from "../imgs/Search-Magnifier.png";
import figma from "../imgs/Frame 1000001934.png";
import sms from "../imgs/Frame 1000001934 (1).png";
import clock from "../imgs/Clock (1).png";
import vector from "../imgs/Vector (5).png";
import vector1 from "../imgs/Vector (6).png";

const Classes = () => {
  return (
    <div className="max-w-full lg:w-[525px] bg-white rounded-lg shadow-xl overflow-hidden p-4 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="font-inter text-lg lg:text-xl font-semibold">
          Recent Enrolled Classes
        </p>
        <div className="flex items-center gap-2">
          <p className="font-inter text-lg font-semibold">All</p>
          <img
            className="w-6 h-6"
            src={search}
            alt="Search Icon"
          />
        </div>
      </div>

      {/* Class Card 1 */}
      <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
        <img
          className="w-16 h-16 object-contain"
          src={figma}
          alt="Figma Class"
        />
        <div className="flex-1">
          <p className="text-base font-bold font-inter text-[#FF4B00] mb-2">
            User Experience (UX) Design
          </p>
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={clock} alt="Clock" />
              <p className="text-sm font-semibold">5:30hrs</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={vector1} alt="Lessons" />
              <p className="text-sm font-semibold">05 Lessons</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={vector} alt="Assignments" />
              <p className="text-sm font-semibold">Assignments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Class Card 2 */}
      <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
        <img
          className="w-16 h-16 object-contain"
          src={sms}
          alt="SMS Class"
        />
        <div className="flex-1">
          <p className="text-base font-bold font-inter text-[#1C1D1D] mb-2">
            Visual Design and Branding
          </p>
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={clock} alt="Clock" />
              <p className="text-sm font-semibold">4:00hrs</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={vector1} alt="Lessons" />
              <p className="text-sm font-semibold">03 Lessons</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={vector} alt="Assignments" />
              <p className="text-sm font-semibold">Assignments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
