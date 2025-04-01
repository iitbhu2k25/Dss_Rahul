// app/dss/basic/sewage/page.tsx
import React from 'react';
import SewageCalculationForm from './components/SewageCalculationForm';

const SewagePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <SewageCalculationForm />
    </div>
  );
};

export default SewagePage;
