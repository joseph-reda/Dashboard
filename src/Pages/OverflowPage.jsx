import React from "react";
import Header from "../components/Header";
import StatCart from "../components/StatCart";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../components/overviewPages/SalesOverviewChart";
import CategoryDistributionChart from "../components/overviewPages/CategoryDistributionChart";
import SalesChannelChart from "../components/overviewPages/SalesChannelChart";

const OverflowPage = () => {
  return (
		<div>
      <Header pageName={"Overflow"} />
			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCart
            name="Total Sales"
            icon={Zap}
            value="$125.32"
            color="#6366F1"
          />
          <StatCart
            name="New Users"
            icon={Users}
            value="$63.55"
            color="#8B5CF6"
          />
          <StatCart
            name="Total Products"
            icon={ShoppingBag}
            value="$99.93"
            color="#EC4899"
          />
          <StatCart
            name="Conversion Rate"
            icon={BarChart2}
            value="$125.32"
            color="#10B981"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverflowPage;
