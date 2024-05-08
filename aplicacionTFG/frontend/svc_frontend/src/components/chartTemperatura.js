import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartTemperatura = ({ datasets, labels }) => {
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
          labels: labels,
          datasets: datasets,
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
  }, [datasets, labels]);

  return <canvas ref={chartRef} style={{ width: '100%', minHeight: '300px' }}></canvas>;
};

export default ChartTemperatura;
