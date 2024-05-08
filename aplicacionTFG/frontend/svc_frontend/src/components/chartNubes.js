import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartNubes = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['0:00','3:00','6:00','9:00','12:00','15:00','18:00','21:00'],
          datasets: [
          {
            label: 'Temperatura',
            data: [1,5,3,7,8,2,10,20],
            backgroundColor: 'rgba(200, 100, 0, 0.2)',
            borderColor: 'rgba(200, 100, 0, 1)',
            borderWidth: 1,
            fill: {
              target: 'origin',
              below: 'rgba(0, 255, 0, 0.1)'
            },
            tension: 0.2
          },{
            label: 'Precipitaciones',
            data: [16,51,32,73,18,22,1,20],
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            borderColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 1,
            fill: {
              target: 'origin',
              below: 'rgba(255, 99, 132, 0.1)'
            },
            tension: 0.2
          },
          {
            label: 'Viento',
            data: [12,25,33,71,81,22,110,20],
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
            fill: {
              target: 'origin',
              below: 'rgba(255, 99, 132, 0.1)'
            },
            tension: 0.2
          }
        ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data, labels]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartNubes;
