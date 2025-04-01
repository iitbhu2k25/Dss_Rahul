// pages/dss/basic/waterdemand/page.tsx
import React, { useState } from 'react';
import WaterDemandForm from './components/WaterDemandForm';
// Import other components similarly

const WaterDemandPage = () => {
  const [currentStage, setCurrentStage] = useState<'population' | 'water_demand' | 'water_supply' | 'sewage'>('water_demand');

  return (
    <div className="container mx-auto p-4">

      {currentStage === 'water_demand' && <WaterDemandForm />}
    </div>
  );
};

export default WaterDemandPage;
