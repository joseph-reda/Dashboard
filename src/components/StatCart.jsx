import { motion } from "framer-motion";
import React from "react";

const StatCart = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div className="bg-gray-800 border border-gray-700 rounded-xl">
      <div className="px-4 py-5">
        <span className="flex items-center text-sm font-semibold text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-2 text-3xl font-semibold text-gray-100">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCart;
