/* eslint-disable no-undef */
import Button from "../common/Button"


const Card = () => {
    const cards = [
        {
            button1: "Weekly",
            button2: "Product",
            title: "Product Team Meeting",
            dis:"This monthly progress agenda is following this items:",
            para: "Introduction to Newest Product Plan",
            para1: "Monthly Revenue updates for each products",
            pic: '/man1.png',
            name: "Floyd Miles",
            date:"Mar 5 04:25"


           
          },
    ]
  return (
    <div>
        {cards.map((card, index)=>(
            <div key={index} className="w-[320px] h-[204px] shadow-md rounded-md"> 
            <div>
            <div className="flex gap-3 items-center p-4">
                    <Button
                      className={`flex  items-center justify-center px-2 py-1 rounded-md text-sm font-medium ${
                        card.button1 === "Weekly"
                          ? "bg-[#F7F7E8] text-[#B1AB1D]"
                          : card.button1 === "Product"
                          ? "bg-[#EDF2FE] text-[#3083FF]"
                          : "bg-[#FEEDED] text-[#DC2626]"
                      }`}
                    >
                     
                      {card.button1}
                    </Button>
                    <Button
                      className={`flex items-center justify-center px-2 py-1 rounded-md text-sm font-medium ${
                        card.button2 === "Weekly"
                          ? "bg-[#F7F7E8] text-[#B1AB1D]"
                          : card.button2 === "Product"
                          ? "bg-[#EDF2FE] text-[#3083FF]"
                          : "bg-[#FEEDED] text-[#DC2626]"
                      }`}
                    >
                     
                      {card.button2}
                    </Button>
                  </div>
                  <p className="text-[15px] font-inter font-bold">{card.title}</p>
                  <p className="text-[13px] font-inter font-semibold text-[#727272]">{card.dis}</p>
                  <li className="text-[13px] font-inter font-semibold text-[#727272]">{card.para}</li>
                  <li className="text-[13px] font-inter font-semibold text-[#727272]">{card.para1}</li>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-[17px] h-[17px] rounded-full" src={card.pic} alt="" />
                        <p className="text-[15px] font-inter font-bold">{card.name}</p>

                    </div>
                    <p  className="text-[13px] font-inter font-semibold text-[#727272]">{card.date}</p>
                  </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
