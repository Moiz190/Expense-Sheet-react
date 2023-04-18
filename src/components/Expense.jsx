import "./Expense.css"
const Expense =({onDelete,day,month,year,title,amount})=>{
    return(
        <div className="expenseContainer">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
            <div className="dateContainer flex flex-col text-center">
                <span>{ day < 10 ? "0" + day : day }</span>
                <span>{ month ?? "0" }</span>
                <span>{ year || 0 }</span>
            </div>
            <div className="pl-1 titleContainer">
                <h2>{ title ?? 'Empty' }</h2>
            </div>
            </div>
            <div className="amountContainer font-semibold text-center">
                <span>$ { amount ?? 0 }</span>
            </div>
        </div>
            <div className="text-center">
            <button onClick={ ()=> onDelete(title) } className="deleteExpenseBtn font-semibold">Delete</button>
            </div> 
        </div>
    );
}
export default Expense