import React from 'react';

const Expenditures = ({ expenditures }) => {
    return (
      <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Expenditures</h2>
        <div>
          {Object.keys(expenditures).map(category => (
            <div key={category}>
              <h3 className="text-xl font-semibold">{category}</h3>
              <ul>
                {expenditures[category].map((item, index) => (
                  <li key={index}>
                    {item.name}: ${item.amount.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Expenditures;
