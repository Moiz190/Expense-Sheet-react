import { useState } from "react";
import "./form.css";
const Child = ({ onsave }) => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [disabled,setDisabled] = useState(false);
  const fetchData = () => {
    const newDate = new Date(date)
    const monthNames =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const fetchedData = {
      title: title,
      amount: number,
      day: newDate.getDate(),
      // < 10 ? "0" + newDate.getDate() : newDate.getDate(),
      month: monthNames[newDate.getMonth()],
      year: newDate.getFullYear(),
    };
    if(fetchedData.title !== '' && fetchedData.number !== '' && date !== ''){
      onsave(fetchedData);
      setTitle('')
      setNumber('')
      setDate('')
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  };
  return (
    <div>
      <form className="p-1 formContainer">
        <div className="flex wrap justify-between">
          <div className="w-45 flex flex-col expenseInputField">
            <label>Enter the Title:</label>
            <input type="text" value={title} placeholder="title" onChange={(event)=>setTitle(event.target.value)} />
          </div>
          <div className="w-45 flex flex-col expenseInputField">
            <label htmlFor="">Enter the Amount:</label>
            <input type="number" value={number} placeholder="Amount" onChange={(event)=>setNumber(event.target.value)} />
          </div>
          <div className="w-45 flex flex-col expenseInputField">
            <label htmlFor="">Date:</label>
            <input type="date" value={date} onChange={(event)=>setDate(event.target.value)} />
          </div>
        </div>
        <div className="text-center">
          <input type="button" onClick={fetchData} className="submitBtn font-semibold" value="Submit" />
        </div>
      </form>
      {disabled === true && (title ==='' || number=== '' || date === '') && <div className="text-center"><span className="text-red">Input Fields are empty</span></div>}
    </div>
  );
};
export default Child;
