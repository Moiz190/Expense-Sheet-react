import './App.css';
import { useState } from 'react';
import Form from './components/form';
import Expense from './components/Expense';
const App=() => {
    const [formData,setFormData] = useState(
      [
      {
        title:"School Fees",
        day:22,
        month:"FEB",
        year:"2022",
        amount:"200"
      },
      {
        title:"Pizza",
        day:4,
        month:"JAN",
        year:"2021",
        amount:"500"
      },
      {
        title:"Books",
        day:6,
        month:"AUG",
        year:"2022",
        amount:"540"
      },
      {
        title:"Bag",
        day:14,
        month:"MAR",
        year:"2022",
        amount:"720"
      },
    ]
    )
    const saveFetchedData = (inApp) => {
    const updateForm =[inApp, ...formData]
    setFormData(updateForm)
  }
  return (
    <div className ="App p-1">
      <h2 className='text-center'>Monthly Budget Sheet</h2>
      <Form onsave={ saveFetchedData } />
      <div className='expensesContainer mt-1'>
        { formData.length === 0 
        ? <div className='text-white text-center'><span>There is nothing to show</span></div> 
        :formData.map(item =>(
            <Expense onDelete={(title)=>setFormData(formData.filter((e)=> e.title !== title))} key={item.title} title={item.title} day={item.day} month={item.month} year={item.year} amount={item.amount} /> 
          ))}
      </div>
    </div>
  );
}
export default App;