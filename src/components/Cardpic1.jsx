/* eslint-disable no-undef */

import Button1 from "../common/Button1";

import Headline from "../common/Headline";
import Profile from "../common/Profile";
import Title from "../common/Title";

const Cardpic1 = () => {
  return (
    <div className="">
      <div className=" w-[320px] h-[204px] shadow-md rounded-md py-2 ">
        <div>
          <div className="flex gap-3 items-center px-4 py-2 ">
            <Button1 button1="Business" />
          </div>

          <Title title="Revenue Progress" />

         

          <img
            className="w-[310px] h-[77px] flex px-4"
            src="/img3.png"
            alt=""
          />

          <div className="flex justify-between items-center    border-t-2 px-4 h-[47px]">
            <Profile pic="/man1.png" name="Floyd Miles" date="Mar 5 04:25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpic1;
