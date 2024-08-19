import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


import carData from "../taladrod-cars.json"

const brandLookup = {};
carData.MMList.forEach(brand => {
  brandLookup[brand.mkID] = brand.Name;
});

const brands = {};
carData.Cars.forEach(car => {
  const brandName = brandLookup[car.MkID];
  
  if (!brands[brandName]) {
    brands[brandName] = {
      label: brandName,
      models: {}
    };
  }

  if (!brands[brandName].models[car.Model]) {
    brands[brandName].models[car.Model] = 0;
  }

  brands[brandName].models[car.Model] += 1;
});

const chartData = {
  labels: Object.keys(brands).map(key => brands[key].label),
  datasets: Object.keys(brands).map(key => ({
    label: brands[key].label,
    data: Object.values(brands[key].models),
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }))
};




const StackedBarChart = ({  }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Car Models by Brand',
      },
      legend: {
        display: false, // This removes the legend
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default StackedBarChart;
