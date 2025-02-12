import React from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import StatCart from "../components/StatCart";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTabel from "../components/products/ProductTabel";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/overviewPages/CategoryDistributionChart";

const ProductPage = () => {
  return (
    <div>
      <Header pageName={"Product"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCart
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366F1"
          />
          <StatCart
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StatCart
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <StatCart
            name="Total Revenue"
            icon={DollarSign}
            value={"$543,210"}
            color="#EF4444"
          />
        </motion.div>

        <ProductTabel />

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
