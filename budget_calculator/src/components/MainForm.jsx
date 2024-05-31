import React,{useEffect, useState} from "react";
import Categories from "../enum/categories";
import FormItem from "./FormItem";
import Expenditures from "./Expenditures";
import CategoricalTotal from "./CategoricalTotal";
import Income from "./Income";

const MainForm=()=>{

    const [items, setItems] = useState([{ name: '', amount: '', category: Categories.MISCELLANEOUS }]);

    const [expenditures, setExpenditures] = useState({
        [Categories.RENT]: [],
        [Categories.FOOD]: [],
        [Categories.UTILITIES]: [],
        [Categories.ENTERTAINMENT]: [],
        [Categories.MISCELLANEOUS]: []
      });

      const handleItemChange = (index, field, value) => {
        setItems(items.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
      };

      const addNewItemForm = () => {
        setItems([...items, { name: '', amount: '', category: Categories.RENT }]);
      };

      const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
      };

      const getTotalRent = () => {
        return expenditures[Categories.RENT].reduce((total, item) => total + item.amount, 0);
      };

      
      const calculateExpenditures = () => {
        const newExpenditures = {
          [Categories.RENT]: [],
          [Categories.FOOD]: [],
          [Categories.UTILITIES]: [],
          [Categories.ENTERTAINMENT]: [],
          [Categories.MISCELLANEOUS]: []
        };
  
        console.log("items:",items);
        items.forEach(item => {
          if (item.name && item.amount && item.category) {
            newExpenditures[item.category].push({ name: item.name, amount: parseFloat(item.amount) });
          }
        });
        console.log("New Expenditures: ", newExpenditures); 
        setExpenditures(newExpenditures);
      };
      

    return (
    <div className="container mt-16 mx-auto p-4 max-w-4xl">
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg p-4 z-10">
        <h1 className="text-4xl font-bold text-center text-sute-blue">Budget Calculator</h1>
      </header>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {items.map((item, index) => (
            <FormItem key={index}
            item={item}
            index={index}
            handleItemChange={handleItemChange}
            deleteItem={deleteItem}/>
          
        ))}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addNewItemForm}>+ Add Item</button>
          {items.length>1?
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={calculateExpenditures}>Calculate</button>
           :
           <></>
          }
          
        </div>
      </div>
      <Expenditures expenditures={expenditures} />
      <CategoricalTotal expenditures={expenditures} />
      <Income rentTotal={getTotalRent()} /> 
    </div>
  );
}

export default MainForm;