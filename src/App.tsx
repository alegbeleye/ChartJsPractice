import "./styles.css";
import { Chart, CategoryScale } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

Chart.register(CategoryScale);
export default function App() {
  const labels = ["Apple", "Orange", "Egg", "Cake", "Pen"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Random Data",
        backgroundColor: "rgb(255, 192, 202)",
        pointStyle: "star",
        pointBackgroundColor: "pink",
        pointBorderColor: "yellow",
        pointHoverBorderColor: "yellow",
        pointHoverRadius: 12,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointBorderWidth: 1.5,
        lineBorderWidth: 2.5,
        borderRadius: 20,
        fill: true,
        data: [10, 45, 20, 70, 100],
      },
    ],
  };

  const options = {
    elements: {
      line: {
        tension: 0.3,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        titleColor: "black",
        bodyColor: "black",
        padding: 20,
      },
    },

    scales: {
      x: {
        //  setting the ticks display to true and the color to white
        ticks: {
          display: true,
          color: "white",
        },

        // to not display the grid for the x labels
        grid: {
          display: true,
          drawOnChartArea: false,
          drawTicks: true,
        },
      },

      y: {
        ticks: {
          // to only display the number before the hyphen
          callback: (val: string | number, idx: number) => {
            return idx % 2 === 0 ? `${val}` : "";
          },
          stepSize: 20,
          color: "white",
        },
        grid: {
          // to remove the hyphen before the label
          drawTicks: true,
        },
      },
    },
  };

  return (
    <div className="App">
      <div className="lineGraph">
        <h6>My First Chart</h6>
        <Line data={data} options={options} />
      </div>
      <Bar data={data} />
    </div>
  );
}
