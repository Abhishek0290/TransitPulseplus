import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import RouteSearch from "../pages/RouteSearch";
import LiveTracking from "../pages/LiveTracking";
import Sustainability from "../pages/Sustainability";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/routes" element={<RouteSearch />} />
      <Route path="/tracking" element={<LiveTracking />} />
      <Route path="/sustainability" element={<Sustainability />} />
    </Routes>
  );
};

export default AppRoutes;