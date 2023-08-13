import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { UserData } from "../Data";

function LineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        label: "Calories",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["orange"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  return <Line data={userData} />;
}

export default LineChart;
