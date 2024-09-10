import { useEffect, useState } from 'react';
import performance from '../../data/performance_metrics.json'; // Importing JSON data

const Leads = () => {
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(null);

  useEffect(() => {
    // Set the cost of goods sold from the performance data
    setCostOfGoodsSold(performance.performance_metrics.cost_of_goods_sold);
  }, []);

  if (costOfGoodsSold === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Total Sales: {costOfGoodsSold}$</h2>
    </div>
  );
};

export default Leads;
