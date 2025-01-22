/* eslint-disable react/prop-types */
import Button from "./Button"


const Button1 = ({button1}) => {
  return (
    < >
    <Button
      className={`flex  items-center justify-center px-2 py-1 rounded-md text-sm font-medium ${
        button1 === "Weekly"
          ? "bg-[#F7F7E8] text-[#B1AB1D]"
          : button1 === "Product"
          ? "bg-[#EDF2FE] text-[#3083FF]"
          : "bg-[#FEEDED] text-[#DC2626]"
      }`}
    >
     
      {button1}
    </Button>
    {/* <Button
      className={`flex items-center justify-center px-2 py-1 rounded-md text-sm font-medium ${
        button2 === "Weekly"
          ? "bg-[#F7F7E8] text-[#B1AB1D]"
          : button2 === "Product"
          ? "bg-[#EDF2FE] text-[#3083FF]"
          : "bg-[#FEEDED] text-[#DC2626]"
      }`}
    >
     
      {button2}
    </Button> */}
  </>
  )
}

export default Button1
