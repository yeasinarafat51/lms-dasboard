import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Cardpic from "./Cardpic";
import Cardpic1 from "./Cardpic1";
import Cardpic2 from "./Cardpic2";
import Cardtext from "./Cardtext";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Cardtext />
      <Cardpic />
      <Card3 />
      <Cardtext />
      <Cardpic />
      <Card4 />
      <Cardpic1 />
      <Cardpic2 />
    </div>
  );
};

export default Cards;
