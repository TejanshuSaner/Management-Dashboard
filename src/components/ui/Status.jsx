import React, { useEffect, useState } from 'react';
import Shipment from '../../data/shipments.json';

const Status = () => {
  const [shipments, setShipments] = useState(null);

  useEffect(() => {
    setShipments(Shipment.shipments); 
  }, []);

  if (!shipments) return <div>Loading...</div>;

  return (
    <div className='p-3'>
      
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment.shipment_id} className='mb-4 p-4 border border-gray-300 rounded'>
            <h3 className='text-base font-semibold'>{shipment.product_name}</h3>
            <p><strong>Status:</strong> {shipment.status}</p>
           
            <p><strong>Estimated Delivery:</strong> {shipment.estimated_delivery}</p>
            <p><strong>Last Updated:</strong> {new Date(shipment.last_updated).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Status;
