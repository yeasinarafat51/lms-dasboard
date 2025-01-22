import hours from "../imgs/Frame 23.png";

const Hours = () => {
  return (
    <div className="w-[357px] h-[273px] p-3 bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Image Section */}

      {/* Content Section */}
      <h2 className="text-[15px] pb-2  px-3 font-inter font-bold text-gray-800">
        Hours Spent
      </h2>
      <img className="m-auto w-[314px] h-[212px]" src={hours} alt="" />
    </div>
  );
};

export default Hours;
