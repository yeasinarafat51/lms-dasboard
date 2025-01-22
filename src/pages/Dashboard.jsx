import Classes from "../components/Classes";
import Cleandar from "../components/Cleandar";
import MyApp from "../components/Cleandar";
import Enrolled from "../components/Enrolled";
import Hours from "../components/Hours";
import Perpromance from "../components/Perpromance";
import Resources from "../components/Resources";
import Todo from "../components/Todo";
import Upcoming from "../components/Upcoming";
import harsh from "../imgs/Frame 44.png";
const Dashboard = () => (
  <div>
    <img src={harsh} alt="" />
    <p className="text-[#85878D] font-inter text-[20px] font-semibold">
      Let’s learn something new today!
    </p>

    <div className="flex flex-wrap gap-6 ">
      <Enrolled />
      <Resources />
      <Cleandar />
      <Hours />
      <Perpromance />
      <Todo />
      <Classes />
      <Upcoming />
    </div>
  </div>
);

export default Dashboard;
