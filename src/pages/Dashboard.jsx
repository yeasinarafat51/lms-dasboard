
import Classes from '../components/Classes';
import MyApp from '../components/Cleandar';
import Enrolled from '../components/Enrolled';
import Perpromance from '../components/Perpromance';
import Resources from '../components/Resources';
import Todo from '../components/Todo';
import Upcoming from '../components/Upcoming';
import harsh from '../imgs/Frame 44.png'
const Dashboard = () => (
  <div>
    {/* <h2 className="text-2xl font-bold">Dashboard</h2> */}
    <img src={harsh} alt="" />
    <p className='text-[#85878D] font-inter text-[20px] font-semibold'>Let’s learn something new today!</p>
   
   <Enrolled/>
   <Resources/>
   {/* <MyApp/> */}
   <Classes/>
   <Upcoming/>
   <Perpromance/>
   <Todo/>
  </div>
);

export default Dashboard;
