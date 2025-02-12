import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SIDECAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "text-indigo-500", href: "/" },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "text-purple-500",
    href: "/Product",
  },
  { name: "Users", icon: Users, color: "text-pink-500", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "text-green-500", href: "/sales" },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "text-yellow-500",
    href: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "text-blue-500",
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "text-teal-400",
    href: "/settings",
  },
];
const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <motion.div
      className={`border-solid z-20 ${isSidebarOpen ? "w-64" : "w-20"}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 border-r border-gray-700 bg-opacity-50 p-4">
        <motion.button
          className="p-2 rounded hover:bg-gray-700"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <Menu />
        </motion.button>
        <nav className="mt-10">
          {SIDECAR_ITEMS.map((item) => (
            <div key={item.href} className="flex">
              <Link
                to={item.href}
                className="flex flex-grow items-center gap-5 mb-5 text-lg font-medium hover:bg-gray-800 px-2 py-3 rounded"
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
                {isSidebarOpen && <span className="rounded">{item.name}</span>}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
