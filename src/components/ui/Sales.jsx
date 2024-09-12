import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'; 
import Inventory from '../../data/inventory.json';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Sales = () => {
  const [sales, setSales] = useState(null);

 
  useEffect(() => {
    setSales(Inventory);
  }, []);

  if (!sales) return <div className="text-white">Loading...</div>;

 
  const totalQuantities = sales.inventory.map(item => {
    return item.warehouses.reduce((total, warehouse) => total + warehouse.quantity, 0);
  });

  const totalSales = totalQuantities.reduce((acc, curr) => acc + curr, 0);

  const data = {
    labels: sales.inventory.map(item => item.name),
    datasets: [{
      label: 'Total Product',
      data: totalQuantities,
      backgroundColor: [
        'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
      ],
      borderColor: [
        '#ffff' 
      ],
      borderWidth: 0.50, 
      hoverOffset: 4
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#000',
          font: {
            size: 12  
          }
        }
      },
      tooltip: { 
        titleColor: '#000',
        bodyColor: '#F0F0F0', 
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          }
        }
      },
      title: {
        display: true,
        text: `Total Product: ${totalSales}`,
        color: '#000', 
        font: {
          size: 14 
        }
      }
    },
    elements: {
      arc: {
        borderWidth: 1 
      }
    }
  };

  return (
    <div className='h-[30vh] w-[30vw] flex items-center justify-center '>
      <Pie data={data} options={chartOptions} /> {/* Changed to Pie chart */}
    </div>
  );
};

export default Sales;
