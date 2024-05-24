import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import 'chart.js/auto'; // Importar Chart.js directamente aquí

const ChartTodas = ({ datasets, labels }) => {
  console.log(datasets);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    let unmounted = false;

    import('chartjs-plugin-zoom').then((zoomPlugin) => {
      if (!unmounted) {
        const Chart = require('chart.js/auto');
        Chart.register(zoomPlugin.default);

        if (chartRef.current) {
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
                  label: datasets.label,
                  data: datasets.data,
                  backgroundColor: datasets.backgroundColor,
                  borderColor: datasets.borderColor,
                  borderWidth: 1,
                  pointRadius: 2,
                  pointHoverRadius: 7,
                  tension: 0.8,
                  fill: {
                    target: 'origin',
                    below: 'rgba(255, 255, 0, 0.5)'
                  },
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    maxTicksLimit: 10,
                  },
                },
                y: {
                  beginAtZero: false,
                },
              },
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                    drag: true,
                  },
                  zoom: {
                    wheel: {
                      enabled: true,
                    },
                    drag: {
                      enabled: true,
                      backgroundColor: 'rgba(0,0,255,0.3)',
                    },
                    pinch: {
                      enabled: true,
                    },
                    mode: 'xy',
                  },
                  interaction: {
                    mode: 'index',
                    intersect: false,
                    dragData: true, // Habilitar el arrastre de datos
                  },
                },
              },
            },
          });
        }
      }
    }).catch(error => console.error("Error loading chart plugin:", error));

    return () => {
      unmounted = true;
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [datasets, labels]);

  const resetZoom = () => {
    if (chartInstance.current) {
      chartInstance.current.resetZoom();
    }
  };

  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
  <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
    <button onClick={resetZoom} className='btn btn-warning mb-2 ml-2 mt-2 shadow'>
      <FontAwesomeIcon icon={faSearchMinus} style={{ marginRight: '5px', width:'20px',height:'20px'}} />
      Restablecer zoom
    </button>
  </div>
  <canvas ref={chartRef} className='mb-3 ml-3 mr-3 mt-5' style={{ width: '100%', height: 'calc(100% - 40px)' }}></canvas>
  </div>
      
   
   </>

  );
};

export default ChartTodas;
