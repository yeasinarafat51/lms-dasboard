import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Sidebar from "../components/Sidebar";
import Assignments from "../pages/Assignments";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/dashboard',
                element: <Sidebar/>
            },
            {
                path: '/assignments',
                element: <Assignments/>
            },
           
        ]
    },
   
])

export default router;