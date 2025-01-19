// src/components/Sidebar.jsx


const Sidebar = () => {
 

  return (
    <div >
      
      <ul className="mt-4 space-y-4">
        <li className="hover:bg-gray-700 p-2">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="hover:bg-gray-700 p-2">
          <a href="/assignments">Assignments</a>
        </li>
        {/* <li className="hover:bg-gray-700 p-2">
          <a href="/students">Students</a>
        </li>
        <li className="hover:bg-gray-700 p-2">
          <a href="/settings">Settings</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
