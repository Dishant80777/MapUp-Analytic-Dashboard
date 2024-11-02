// components/GeographicalDistribution.js
import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { evData } from '../data';

// Register necessary components for Pie/Doughnut charts
ChartJS.register(ArcElement, Tooltip, Legend);

const GeographicalDistribution = () => {
    const data = {
        labels: Object.keys(evData.geographicalDistribution),
        datasets: [
            {
                label: 'EVs by Region',
                data: Object.values(evData.geographicalDistribution),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Geographical Distribution of EVs</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '400px',
                }}
            >
                <div style={{ width: '400px', height: '400px' }}>
                    <Pie data={data} />
                    {/* Or use <Doughnut data={data} /> for a doughnut chart */}
                </div>
            </div>
        </div>
    );
};

export default GeographicalDistribution;
