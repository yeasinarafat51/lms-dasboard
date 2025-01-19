// src/components/Navbar.jsx


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">LMS Dashboard</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/dashboard" className="hover:text-gray-200">shboard</a>
          </li>
          {/* <li>
            <a href="/courses" className="hover:text-gray-200">Courses</a>
          </li>
          <li>
            <a href="/students" className="hover:text-gray-200">Students</a>
          </li>
          <li>
            <a href="/settings" className="hover:text-gray-200">Settings</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
