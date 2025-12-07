import { Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ManageDishes from "./pages/ManageDishes";
import ManageOrders from "./pages/ManageOrders";
import Messages from "./pages/Messages";
import Analytics from "./pages/Analytics";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dishes" element={<ManageDishes />} />
      <Route path="/orders" element={<ManageOrders />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}
