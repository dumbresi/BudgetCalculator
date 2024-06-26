import React from "react";
import Categories from "../enum/categories";

const FormItem = ({ item, index, handleItemChange, deleteItem }) => {
  return (
    <div className="flex justify-between space-x-4 mb-4">
      <input 
        type="text" 
        value={item.name} 
        onChange={(e) => handleItemChange(index, 'name', e.target.value)} 
        placeholder="Enter Item Name" 
        required 
        className="border border-gray-300 p-2 flex-1 rounded" 
      />
      <input 
        type="text" 
        value={item.amount} 
        onChange={(e) => handleItemChange(index, 'amount', e.target.value)} 
        placeholder="Amount" 
        required 
        className="border border-gray-300 p-2 w-24 rounded"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }} 
      />
      <select 
        value={item.category} 
        onChange={(e) => handleItemChange(index, 'category', e.target.value)} 
        className="border border-gray-300 p-2 rounded"
      >
        {Object.values(Categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => deleteItem(index)}
      >
        Delete
      </button>
    </div>
  );
}

export default FormItem;
