import React from "react";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Earnings (USD)",
        data: [500, 1000, 1500, 1200, 1800, 2500],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;