// src/pages/Dashboard.jsx


import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
     
      <div className="flex-1">
   
        <Navbar />
        <div className="p-4">
          <h2 className="text-2xl font-bold">Welcome to the LMS Dashboard</h2>
          <p className="mt-4">Manage your courses, students, and settings from here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
