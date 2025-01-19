
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const Main = () => {
    return (
        <div>
            <Sidebar/>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Main;