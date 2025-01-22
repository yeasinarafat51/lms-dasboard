/* eslint-disable react/prop-types */


const Profile = ({pic,name, date}) => {
  return (
    <>
      <div className="flex items-center gap-2">
                        <img className="w-[17px] h-[17px] rounded-full" src={pic} alt="" />
                        <p className="text-[15px] font-inter font-bold">{name}</p>

                    </div>
                    <p  className="text-[13px] font-inter font-semibold text-[#727272]">{date}</p>
    </>
  )
}

export default Profile
