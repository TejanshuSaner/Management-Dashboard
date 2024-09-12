import { useEffect, useState } from 'react';
import performance from '../../data/performance_metrics.json'; 

const Leads = () => {
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(null);
  const [average,setAverage]=useState(null)
  const [turnover,setTurnOver]=useState(null)

  useEffect(() => {
    
    setCostOfGoodsSold(performance.performance_metrics.cost_of_goods_sold),
    setAverage(performance.performance_metrics.average_lead_time),
    setTurnOver(performance.performance_metrics.inventory_turnover_rate)
  }, []);

  if (costOfGoodsSold === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Total Sales: {costOfGoodsSold}$</h2>
      <small>average_lead_time:{average}s</small>
      <p>Inventory Turnover Rate is : {turnover}%</p>
    </div>
  );
};

export default Leads;
