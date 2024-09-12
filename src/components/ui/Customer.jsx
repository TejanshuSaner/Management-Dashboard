import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import performance from '../../data/performance_metrics.json';
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

const Customer = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    setCustomer(performance);
  }, []);

  if (!customer) return <div>Loading...</div>;


  const fulfillmentRate = customer.performance_metrics.order_fulfillment_rate;
  const unfulfillmentRate = 100 - fulfillmentRate;

  const data = {
    labels: ['Unfulfillment', 'Fulfillment'],
    datasets: [{
      label: 'Fulfillment Rate',
      data: [unfulfillmentRate, fulfillmentRate], 
      backgroundColor: [
        'white', 
        '#6B21A8'  
      ],
      hoverOffset: 4
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#000'
        }
      },
      title: {
        display: true,
        text: 'Order Fulfillment Rate',
        color: '#000',
        font: {
          size: 14
        }
      }
    }
  };

  return (
    <div className='h-[30vh] w-[30vw] flex items-center justify-center'>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
};

export default Customer;
