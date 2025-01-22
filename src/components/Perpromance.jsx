import clock from "../imgs/Frame 28.png";

const Perpromance = () => {
  return (
    <div className="w-[241px] h-[273px] p-3 bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Image Section */}

      {/* Content Section */}
      <h2 className="text-[15px] pb-2 px-3 font-inter font-bold text-gray-800">
        Performance
      </h2>
      <img className="m-auto w-[204px] h-[216px]" src={clock} alt="" />
    </div>
  );
};

export default Perpromance;
