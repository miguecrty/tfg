import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartTodas = ({ datasets, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // Destroy any previous chart instance to avoid overlapping
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
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
  }, [datasets, labels]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <canvas ref={chartRef} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default ChartTodas;
