import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { UserData1 } from "../Data1";

function LineChart1() {
  const [userData, setUserData] = useState({
    labels: UserData1.map((data) => data.day),
    datasets: [
      {
        label: "Calories Burned",
        data: UserData1.map((data) => data.userLost),
        backgroundColor: ["orange"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  return <Line data={userData} />;
}

export default LineChart1;
