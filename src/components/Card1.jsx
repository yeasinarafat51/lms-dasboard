/* eslint-disable no-undef */

import Button1 from "../common/Button1";
import Discription from "../common/Discription";
import Headline from "../common/Headline";
import Profile from "../common/Profile";
import Title from "../common/Title";

const Card1 = () => {
  return (
    <div className="">
      <div className=" w-[320px] h-[204px] shadow-md rounded-md py-2 ">
        <div>
          <div className="flex gap-3 items-center px-4 py-2 ">
            <Button1 button1="Monthly" />
            <Button1 button1="Business" />
          </div>

          <Title title="Product Team Meeting" />

          <Headline headline="This monthly progress agenda is following this items:" />

          <Discription
            dis="Introduction to Newest Product Plan"
            dis1="Monthly Revenue updates for each "
          />

          <div className="flex justify-between items-center  pb-0  border-t-2 px-4 h-[47px]">
            <Profile pic="/man1.png" name="Floyd Miles" date="Mar 5 04:25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
