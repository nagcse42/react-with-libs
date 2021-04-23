import React from "react";
import { Line, Bar } from "react-chartjs-2";

function ChartSample() {
  const chartData = {
    labels: [
      "Excess Baggage",
      "Document Print",
      "Lounge",
      "Paid Seat",
      "Promotional Upgrade"
    ],
    datasets: [
      {
        label: "Sales for 2020(M $)",
        data: [5, 0.8, 1, 3, 6],
        borderColor: ["rgba(201,11,222,1)"],
        backgroundColor: ["rgba(201,11,222,1)"],
        pointBackgroundColor: ["rgba(201,11,222,1)"],
        pointBorderColor: ["rgba(201,11,222,1)"]
      },
      {
        label: "Sales for 2021(M $)",
        data: [2, 0.5, 0.5, 2, 5],
        borderColor: ["rgba(15,199,115,1)"],
        backgroundColor: ["rgba(15,199,115,1)"],
        pointBackgroundColor: ["rgba(15,199,115,1)"],
        pointBorderColor: ["rgba(15,199,115,1)"]
      }
    ]
  };

  const dataOptions = {
    title: {
      display: true,
      text: "ASC 3.0 Income"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 20,
            stepSize: 1
          }
        }
      ]
    }
  };

  return (
    <div style={{ width: "550px" }}>
      <Line data={chartData} options={dataOptions}></Line>
      <Bar data={chartData} options={dataOptions}></Bar>
    </div>
  );
}

export default ChartSample;
