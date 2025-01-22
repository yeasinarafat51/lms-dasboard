/* eslint-disable react/prop-types */
import Button from "./Button";

const Button1 = ({ button1 }) => {
  // Map button types to their corresponding styles
  const buttonStyles = {
    Weekly: "bg-[#F7F7E8] text-[#B1AB1D]",
    Product: "bg-[#EDF2FE] text-[#3083FF]",
    Business: "bg-[#F4EDF7] text-[#954BAF]",
    Personal: "bg-[#FBF4EC] text-[#D28E3D]",
    Badge: "bg-[#F7F7E8] text-[#B1AB1D]",
  };

  // Default style if button1 does not match any key
  const defaultStyle = "bg-gray-200 text-gray-700";

  return (
    <Button
      className={`flex items-center justify-center px-2 py-1 rounded-md text-sm font-medium ${
        buttonStyles[button1] || defaultStyle
      }`}
    >
      {button1}
    </Button>
  );
};

export default Button1;
