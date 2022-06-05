import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        setChartData({
            datasets: [
                {
                    data: [data.score, 60-parseInt(data.score)],
                    backgroundColor: [
                        '#438AF6',  
                        'rgba(67, 138, 246, 0.1)',
                    ],
                    borderColor: [
                        '#438AF6',
                        'rgba(67, 138, 246, 0.1)',
                    ],
                    borderWidth: 0.5,
                },
            ],
        })
    }, [data])

  return <Doughnut data={chartData} />;
}
