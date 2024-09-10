import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Inventory from '../../data/inventory.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register components for the bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Warehouse = () => {
  const [warehousedata, setWarehousedata] = useState(null);

  useEffect(() => {
    setWarehousedata(Inventory);
  }, []);

  if (!warehousedata) return <div className="text-white">Loading...</div>;

  // Dynamically generate chart data based on the inventory data
  const labels = warehousedata.inventory.flatMap(item => 
    item.warehouses.map(warehouse => warehouse.location)
  );

  const quantities = warehousedata.inventory.flatMap(item => 
    item.warehouses.map(warehouse => warehouse.quantity)
  );

  const data = {
    labels, // Labels for the X-axis (locations of the warehouses)
    datasets: [{
      label: 'Stock Quantity',
      data: quantities, // Quantities corresponding to each warehouse
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',  // Vibrant Pink
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#000'
        }
      },
      title: {
        display: true,
        text: 'Stock Quantities by Warehouse',
        color: '#000'
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#000'
        }
      },
      y: {
        ticks: {
          color: '#000'
        },
        beginAtZero: true
      }
    }
  };

  return (
    <div className='h-[40vh] w-[80vw] flex justify-center items-center p-2'>
    
        <Bar data={data} options={options} />
      </div>
   
  );
};

export default Warehouse;
