// WindChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartViento = ({ data }) => {
  const chartData = {
    labels: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
    datasets: [
      {
        label: 'Wind Speed',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: data
      }
    ]
  };

  return (
    <div>
      <h2>Wind Chart</h2>
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
      />
    </div>
  );
};

export default ChartViento;
