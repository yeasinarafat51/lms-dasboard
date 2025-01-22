import Card from "./Card"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card2"
import Cardpic from "./Cardpic"
import Cardtext from "./Cardtext"


const Cards = () => {
  return (
    <div className="grid grid-cols-3 space-y-4">
      <Card/>
      <Card1/>
      <Card2/>
      <Card3/>
      <Cardtext/>
      <Cardpic/>
      
    </div>
  )
}

export default Cards
