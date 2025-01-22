/* eslint-disable no-undef */

import Button1 from "../common/Button1"
import Discription from "../common/Discription"
import Headline from "../common/Headline"
import Profile from "../common/Profile"
import Title from "../common/Title"


const Cardpic = () => {
   
  return (
    <div  className="">
             <div  className=" w-[320px] h-[204px] shadow-md rounded-md py-2 "> 
            <div>
            <div className="flex gap-3 items-center px-4 ">
                  <Button1 button1="Weekly"/>
                  <Button1 button1="Product"/>
                  </div>
                  {/* <p className="text-[15px] font-inter font-bold px-4">{card.title}</p> */}
                  <Title title="Product Team Meeting"/>
                  {/* <p className="text-[13px] font-inter font-semibold text-[#727272] px-4">{card.dis}</p> */}
                  <Headline headline="This monthly progress agenda is following this items:"/>
                  {/* <li className="text-[13px] font-inter font-semibold text-[#727272] px-4">{card.para}</li>
                  <li className="text-[13px] font-inter font-semibold text-[#727272] px-4">{card.para1}</li> */}
                  {/* <Discription dis="Introduction to Newest Product Plan" dis1="Monthly Revenue updates for each products"/> */}
                  <img className="w-[310px] h-[40px] flex px-4" src='/img3.png' alt="" />
                  {/* <img className="h-[40px] " src={card.imges} alt="" /> */}
                  <div className="flex justify-between items-center  pb-0  border-t-2 px-4 h-[47px]">
                    {/* <div className="flex items-center gap-2">
                        <img className="w-[17px] h-[17px] rounded-full" src={card.pic} alt="" />
                        <p className="text-[15px] font-inter font-bold">{card.name}</p>

                    </div>
                    <p  className="text-[13px] font-inter font-semibold text-[#727272]">{card.date}</p> */}
                    <Profile pic= '/man1.png' name="Floyd Miles" date="Mar 5 04:25" />
                  </div>
            </div>
          </div>
           </div>
  )
}

export default Cardpic
