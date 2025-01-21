import auto from "../imgs/Group 1231.png";
import basic from "../imgs/Group 1237.png";
import desin from "../imgs/Group 1236.png";
const Resources = () => {
  return (
    <div className="w-[449px] h-[188px] bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-[15px] m-4 font-inter font-semibold text-gray-800">
        Your Resources
      </h2>
      {/* Image Section */}

      <div className="flex gap-4 px-4">
        <div>
          <img src={auto} alt="" />
        </div>
        <div className="w-[364px]">
          <div className="flex justify-between">
            <p className="text-[10px] font-semibold font-Poppins">
              Auto-layout.pdf
            </p>
            <p className="text-[10px] font-semibold font-Poppins">8.5 mb</p>
            <p className="text-[10px] font-semibold font-Poppins text-[#85878D]">
              cancel
            </p>
          </div>
          <div className="bg-[#1C1D1D0D] w-[318px] h-[5px] rounded-full my-2">
            <div
              className="bg-[#FF4B00] h-[5px] rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        <div>
          <img src={desin} alt="" />
        </div>
        <div className="w-[364px]">
          <div className="flex justify-between">
            <p className="text-[10px] font-semibold font-Poppins">
            Design_Tips.png
            </p>
            <p className="text-[10px] font-semibold font-Poppins">578 kb</p>
            <p className="text-[10px] font-semibold font-Poppins text-[#FF4B00]">
              Download
            </p>
          </div>
          <div className="w-[318px] h-[5px] rounded-full pb-2 mb-2">
            <p className="text-[6px] font-semibold font-Poppins text-[#85878D]">Let&lsquo;s qucikly create some realstic and shiny metal @figma</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        <div>
          <img src={basic} alt="" />
        </div>
        <div className="w-[364px]">
          <div className="flex justify-between">
            <p className="text-[10px] font-semibold font-Poppins">
            Basics_Of_UX.fig
            </p>
            <p className="text-[10px] font-semibold font-Poppins">2.5 mb</p>
            <p className="text-[10px] font-semibold font-Poppins text-[#FF4B00]">
              Download
            </p>
          </div>
          <div className="w-[318px] h-[5px] rounded-full pb-2 mb-2">
            <p className="text-[6px] font-semibold font-Poppins text-[#85878D]">An introductory guide to the fundamental principles and practices of User Experience (UX) design.</p>
          </div>
        </div>
      </div>
     
      {/* Content Section */}
    </div>
  );
};

export default Resources;
