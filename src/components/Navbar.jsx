

const TopNavbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">LMS Dashboard</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/students">Students</a></li>
      </ul>
    </div>
  </nav>
);

export default TopNavbar;
