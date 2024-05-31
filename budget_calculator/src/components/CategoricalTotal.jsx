// src/components/CategoryTotal.js

import React from 'react';

const CategoricalTotal = ({ expenditures }) => {
  const getTotal = (category) => {
    return expenditures[category].reduce((total, item) => total + item.amount, 0);
  };

  return (
    <div className="mt-4 bg-white shadow-lg rounded-lg p-6">
      {Object.keys(expenditures).map(category => (
        <div key={category} className="mb-2 flex flex-row justify-between">
          <h4 className="text-lg font-medium">Total {category}: </h4>
          <h4>${getTotal(category).toFixed(2)}</h4>
        </div>
      ))}
    </div>
  );
};

export default CategoricalTotal;
