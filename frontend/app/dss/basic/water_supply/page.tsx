// app/dss/basic/waterdemand/page.tsx (or a separate page for water supply)
import React from 'react';
import WaterSupplyForm from './components/WaterSupplyForm';

const WaterSupplyPage = () => {
  return (
    <div className="container mx-auto p-4">
      <WaterSupplyForm />
    </div>
  );
};

export default WaterSupplyPage;
