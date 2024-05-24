import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';

const ChartTodas = ({ datasets, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('chart.js/auto').then((Chart) => {
        import('chartjs-plugin-zoom').then((zoomPlugin) => {
          Chart.default.register(zoomPlugin.default);

          if (chartRef.current) {
            if (chartInstance.current) {
              chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart.default(ctx, {
              type: 'line',
              data: {
                labels: labels,
                datasets: datasets.map((dataset) => ({
                  ...dataset,
                  pointRadius: 1,
                  pointHoverRadius: 7,
                  tension: 0.8,
                })),
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
                events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
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
                      drag:{
                       enabled: true,
                       backgroundColor:'rgba(0,0,255,0.3)' 
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
        });
      });
    }
  }, [datasets, labels]);

  // Función para restablecer el zoom inicial
  const resetZoom = () => {
    if (chartInstance.current) {
      chartInstance.current.resetZoom();
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
  <div style={{ position: 'absolute', top: '30px', right: '1px' }}>
    <button onClick={resetZoom} className='btn btn-warning shadow'>
      <FontAwesomeIcon icon={faSearchMinus} style={{ marginRight: '5px' }} />
    </button>
  </div>

  <canvas ref={chartRef} style={{ width: '100%', height: 'calc(100% - 40px)' }}></canvas>
</div>

  );
};

export default ChartTodas;
