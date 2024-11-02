// components/EVPopulationByBrand.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { evData } from '../data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EVPopulationByBrand = () => {
  const data = {
    labels: Object.keys(evData.byBrand),
    datasets: [
      {
        label: 'EVs by Brand',
        data: Object.values(evData.byBrand),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div>
      <h2>EV Population by Brand</h2>
      <Bar data={data} />
    </div>
  );
};

export default EVPopulationByBrand;
