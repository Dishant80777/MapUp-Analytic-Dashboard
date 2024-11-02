// components/TrendsOverTime.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { evData } from '../data';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrendsOverTime = () => {
  const data = {
    labels: Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString('default', { month: 'long' })),
    datasets: [
      {
        label: 'Monthly EV Growth',
        data: evData.monthlyTrends,
        fill: true,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.4)',
        pointBorderColor: '#42A5F5',
        pointBackgroundColor: '#42A5F5',
      },
    ],
  };

  return (
    <div>
      <h2>Trends Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default TrendsOverTime;
