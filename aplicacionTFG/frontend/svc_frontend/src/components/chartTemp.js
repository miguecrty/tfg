import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartTemp = ({data, labels}) => {
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
    datasets: [
      {
        label: 'Temperatura',
        data: data.temp,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: 'rgba(0,255, 0, 0.2)',
        borderWidth: 1,
        fill: {
          target: 'origin',
          below: 'rgba(0, 255, 0, 0.1)'
        },
      },
      {
        label: 'Temperatura mínima',
        data: data.temp_min,
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        borderColor: 'rgba(0, 0, 255, 0.2)',
        borderWidth: 1,
        fill: {
          target: 'origin',
          below: 'rgba(0, 255, 0, 0.1)'
        },
        hidden: true
      },
      {
        label: 'Temperatura máxima',
        data: data.temp_max,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: {
          target: 'origin',
          below: 'rgba(0, 255, 0, 0.1)'
        },
        hidden: true
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

export default ChartTemp;
