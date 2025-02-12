import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import OverflowPage from "./Pages/OverflowPage";
import ProductPage from "./Pages/ProductPage";
import UsersPage from "./Pages/UsersPage";
import SalesPage from "./Pages/SalesPage";
import OrdersPage from "./Pages/OrdersPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import SettingsPage from "./Pages/SettingsPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<OverflowPage />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
