
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Router>
  <div className="flex flex-col md:flex-row h-screen">
    <Sidebar />
    <div className="flex-1">
      <TopNavbar />
      <div className="p-4 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  </div>
</Router>
);

export default App;
