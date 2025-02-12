import React from "react";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import StatCart from "../components/StatCart";
import UserTable from "../components/users/UserTable";
import UserGrowthChart from "../components/users/UserGrowthChart ";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap ";
import UserDemographicsChart from "../components/users/UserDemographicsChart ";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div>
      <Header pageName="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCart
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCart
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCart
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCart
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        <UserTable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
