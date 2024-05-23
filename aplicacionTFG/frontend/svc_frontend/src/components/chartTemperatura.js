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
        label: 'Temperatura (ºC)',
        data: data.temp,
        backgroundColor: 'rgba(250, 190, 30, 0.5)',
        borderColor: 'rgba(250,190, 30, 0.2)',
        borderWidth: 1,
        fill: {
          target: 'origin',
          below: 'rgba(255, 255, 0, 0.1)'
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

export default ChartTemp;
