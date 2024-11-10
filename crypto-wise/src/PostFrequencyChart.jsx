import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Регистрируем необходимые компоненты Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PostFrequencyChart = ({ data }) => {
  // Подготовка данных для графика
  const chartData = {
    labels: data.map((item) => item.day), // Метки по оси X (дни)
    datasets: [
      {
        label: "Частота постов",
        data: data.map((item) => item.count), // Значения по оси Y (частота)
        fill: false,
        borderColor: "#4bc0c0",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Частота постов по дням</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PostFrequencyChart;
