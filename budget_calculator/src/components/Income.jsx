import React from 'react';

const Income = ({ rentTotal }) => {
  const requiredIncome = rentTotal / 0.33;
  return (
    <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-medium text-gray-700">Required Monthly Income: ${requiredIncome.toFixed(2)}</h3>
    </div>
  );
};

export default Income;