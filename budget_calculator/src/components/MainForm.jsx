import React,{useState} from "react";
import Categories from "../enum/categories";
import FormItem from "./FormItem";

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
    
        items.forEach(item => {
          if (item.name && item.amount && item.category) {
            newExpenditures[item.category].push({ name: item.name, amount: parseFloat(item.amount) });
          }
        });
    
        setExpenditures(newExpenditures);
      };

      

    return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-teal-600">Budget Calculator</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {items.map((item, index) => (
            <FormItem key={index}
            item={item}
            index={index}
            handleItemChange={handleItemChange}/>
          
        ))}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addNewItemForm}>+ Add Item</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={calculateExpenditures}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default MainForm;