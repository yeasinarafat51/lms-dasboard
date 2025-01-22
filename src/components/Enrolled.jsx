import colum from '../imgs/Frame 1000001916.png'

const Enrolled = () => {
  return (
    <div className="w-[257px] h-[188px] bg-white rounded-lg shadow-xl overflow-hidden">
    {/* Image Section */}
   

    {/* Content Section */}
    <h2 className="text-[15px] m-4 font-inter font-semibold text-gray-800">Recent enrolled course</h2>
    <div className="w-[216px] h-[117px] m-auto bg-white rounded-lg shadow-md overflow-hidden">
    {/* Image Section */}
   <img className='w-[48px] h-[39px]' src={colum} alt="" />
   <h2 className="text-[15px] font-inter mx-2 px-2 font-semibold text-gray-800">Product Design Course</h2>
 <div className='flex justify-center items-center gap-2 py-4'>
 <div className='bg-[#1C1D1D0D] w-[129px] h-[9px] rounded-full'>
  <div
                    className="bg-[#FF4B00] h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                  ></div>
  </div>
  <p className='font-inter text-[9px]'> <span className='text-[#FF4B00] text-[9px]'>14/30</span> class</p>
 </div>

    {/* Content Section */}
    
  </div>
  </div>
  )
}

export default Enrolled
