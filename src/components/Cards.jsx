import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Cardpic from "./Cardpic";
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
    </div>
  );
};

export default Cards;
