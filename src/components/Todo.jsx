
import check from '../imgs/Rectangle 119 (2).png'
import checkbox from '../imgs/Rectangle 119 (3).png'
// import { MdCheckBox } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
const Todo = () => {
  return (
    <div className="w-[289px] h-[273px] p-3 bg-white rounded-lg shadow-md overflow-hidden">
    {/* Image Section */}
   

    {/* Content Section */}
    <h2 className="text-[15px]   font-inter font-bold text-gray-800">To do List</h2>
    <div className="flex items-center py-2 gap-4 px-4   bg-white text-black  border-b-2 bottom-2 border-b-[#E4E4E4]  mx-auto">
     <img className='w-[17px] h-[14px]'  src={check} alt="" />
     <div className=" ">
            <p className="text-[14px] font-bold font-inter text-[#121212]">Human Interaction Designs</p>
            <p className="text-[13px] font-bold font-inter text-[#41475E]">Tuesday, 30 June 2024</p>
          </div>
          
      </div>
    <div className="flex items-center py-2 gap-4 px-4   bg-white text-black  border-b-2 bottom-2 border-b-[#E4E4E4]  mx-auto">
     <img className='w-[17px] h-[14px]'  src={check} alt="" />
     <div className=" ">
            <p className="text-[14px] font-bold font-inter text-[#121212]">Design system Basics</p>
            <p className="text-[13px] font-bold font-inter text-[#41475E]">Monday, 24 June 2024</p>
          </div>
          
      </div>
    <div className="flex items-center py-2 gap-4 px-4   bg-white text-black  border-b-2 bottom-2 border-b-[#E4E4E4]  mx-auto">
    <ImCheckboxChecked  className=' text-[#FF4B00]' />
     <div className=" ">
     <del className="text-[14px] font-bold font-inter text-[#121212]">Introduction to UI</del>
            <p className="text-[13px] font-bold font-inter text-[#41475E]">Friday, 10 June 2024</p>
          </div>
          
      </div>
    <div className="flex items-center py-2 gap-4 px-4    mx-auto">
    <ImCheckboxChecked  className=' text-[#FF4B00]' />
   
     {/* <img className='w-[17px] h-[14px]'  src={checkbox} alt="" /> */}
     <div className=" ">
          
            <del className="text-[14px] font-bold font-inter text-[#121212]">Basics of Figma</del>
            <p className="text-[13px] font-bold font-inter text-[#41475E]">Friday, 05 June 2024</p>
          </div>
          
      </div>
    
   
  </div>
  )
}

export default Todo
