
import search from '../imgs/Search-Magnifier.png'
import figma from '../imgs/Frame 1000001934.png'
import sms from '../imgs/Frame 1000001934 (1).png'
import clock from '../imgs/Clock (1).png'
import vector from '../imgs/Vector (5).png'
import vector1 from '../imgs/Vector (6).png'
const Classes = () => {
  return (
    <div className="w-[525px] h-[303px] bg-white rounded-lg shadow-md overflow-hidden p-3 space-y-5">
    <div className='flex justify-between mx-auto w-[475px] pt-4'>
        <p className="font-inter text-[19px] font-semibold ">
        Recent enrolled classes
        </p>
        <div className='flex gap-2'>
        <p className="font-inter text-[19px] font-semibold">
        All
        </p>
<img className='w-[24px] h-[24px]' src={search} alt="" />
        </div>
    </div>
    <div className="flex gap-4 px-4 w-[475px] h-[93px]  bg-white rounded-lg shadow-md p-4 mx-auto">
        <div>
          <img src={figma} alt="" />
        </div>
        <div className="w-[390px] h-[80px">
        <div className="w-[318px] h-[5px] rounded-full pb-2 mb-6">
            <p className="text-[16px] font-bold font-inter text-[#FF4B00]">User Experience (UX) Design</p>
          </div>
         <div className='flex justify-between'>
         <div className="flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={clock} alt="" />
            <p className="text-[14px] font-semibold font-Poppins ">
            5:30hrs
            </p>
            </div>
         </div>
         <div className="flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={vector1} alt="" />
            <p className="text-[14px] font-semibold font-Poppins ">
            05 Lessons
            </p>
            </div>
         </div>
         <div className="flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={vector} alt="" />
            <p className="text-[14px] font-semibold font-Poppins ">
            Assignments
            </p>
            </div>
         </div>
           
           
          </div>
          
        </div>
      </div>
    <div className="flex gap-4 px-4 w-[475px] h-[93px]  bg-white rounded-lg shadow-md p-4 mx-auto">
        <div>
          <img src={sms} alt="" />
        </div>
        <div className="w-[390px] h-[80px">
        <div className="w-[318px] h-[5px] rounded-full pb-2 mb-6">
            <p className="text-[16px] font-bold font-inter text-[#1C1D1D]">Visual Design and Branding</p>
          </div>
         <div className='flex justify-between'>
         <div className="flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={clock} alt="" />
            <p className="text-[14px] font-semibold font-Poppins ">
            4:00hrs
            </p>
            </div>
         </div>
         <div className="flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={vector1} alt="" />
            <p className="text-[14px] font-semibold font-Poppins ">
            03 Lessons
            </p>
            </div>
         </div>
         <div className="flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={vector} alt="" />
            <p className="text-[14px] font-semibold font-Poppins ">
            Assignments
            </p>
            </div>
         </div>
           
           
          </div>
          
        </div>
      </div>
   
  </div>
  )
}

export default Classes
