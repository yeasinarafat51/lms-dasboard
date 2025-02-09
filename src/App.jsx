import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Notes from "./pages/Notes";

const App = () => (
  <Router>
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopNavbar />
        <div className="p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
