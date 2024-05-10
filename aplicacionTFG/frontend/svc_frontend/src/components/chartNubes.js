import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartNubes = ({data, labels}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
          {
            label: 'Nubosidad (%)',
            data: data,
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            borderColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 1,
            fill: {
              target: 'origin',
              below: 'rgba(0, 255, 0, 0.1)'
            },
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
