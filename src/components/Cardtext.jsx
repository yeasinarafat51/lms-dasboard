/* eslint-disable no-undef */

import Button1 from "../common/Button1";
import Discription from "../common/Discription";
import Headline from "../common/Headline";
import Profile from "../common/Profile";
import Title from "../common/Title";

const Cardtext = () => {
  return (
    <div className="">
      <div className=" w-[320px] h-[204px] shadow-md rounded-md py-2 ">
        <div>
          <div className="flex gap-3 items-center py-2 px-4 ">
            <Button1 button1="Weekly" />
            <Button1 button1="Product" />
          </div>

          <Title title="Product Team Meeting" />

          <Headline headline="Some Summaries of this weeks meeting with some conclusion we get :" />

          <div className="flex justify-between items-center  mt-10  border-t-2 px-4 h-[47px]">
            <Profile pic="/man1.png" name="Floyd Miles" date="Mar 5 04:25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardtext;
