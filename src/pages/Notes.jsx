
import Card from '../components/Card';
import funnel from '../imgs/FunnelSimple.png'
import fill from '../imgs/fil.png'
import { FaPlus } from "react-icons/fa6";
const Notes = () => {
  return (
   <div>
     <div className='flex justify-between'>
      <p className="text-[24px] font-inter font-semibold text-[#FF4B00]">Notes</p>
      <div className='flex justify-between gap-4'>
        <button className='flex items-center gap-2 border-2 border-[#FF4B00] rounded-md py-2 px-3'><img src={funnel} alt="" /> <p className='text-[#FF4B00] text-[14px] font-inter font-semibold'>Sort By</p></button>
        <button className='flex items-center gap-2 border-2 border-[#FF4B00] rounded-md py-2 px-3'><img src={fill} alt="" /> <p className='text-[#FF4B00] text-[14px] font-inter font-semibold'>Filter </p></button>
        <button className='flex items-center gap-2 border-2 border-[#FF4B00] bg-[#FF4B00] rounded-md py-2 px-3 text-white'><FaPlus /> <p className=' text-[14px] font-inter font-semibold'>Add Notes</p></button>
      </div>
    </div>
    <Card/>
   </div>
  )
}

export default Notes
