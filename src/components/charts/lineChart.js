import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ data }) {

    const [chartData, setChartData] = useState({
        datasets: [],
    });
     
    const [chartOptions, setChartOptions] = useState({});
    
    useEffect(() => {
    setChartData({
        labels: ["0%", "20%", "40%", "60%", "80%", "100%"],
        datasets: [
            {
                label: "Percentile",
                data: [12, data.percentile, 30, 65, 40, 38],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.4)",
            },
        ],
    });
    setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: false,
            },
            options: {
                scales: {
                    y: {
                        display: false,
                    },
                },
            },
        },
    });
    }, [data]);
  return <Line options={chartOptions} data={chartData} />;
}
