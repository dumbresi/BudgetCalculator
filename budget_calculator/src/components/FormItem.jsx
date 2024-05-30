import React ,{ useState } from "react";
import Categories from "../enum/categories";


const FormItem =({ item, index, handleItemChange })=>{
    const [itemName, setItemName]=useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(Categories.MISCELLANEOUS);

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ itemName, amount: parseFloat(amount), category });
        setItemName('');
        setAmount('');
        setCategory(Categories.RENT);
      };

      const addItem = (item) => {
        // setExpenditures(prevExpenditures => ({
        //   ...prevExpenditures,
        //   [item.category]: [...prevExpenditures[item.category], item]
        // }));
      };

    return(
    <div className="flex space-x-4 mb-4">
        <input type="text" value={itemName} onChange={(e)=> setItemName(e.target.value)} placeholder="Enter Item Name" required />
        <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Amount" required/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {Object.values(Categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        </select>
    </div>
    );
}

export default FormItem;