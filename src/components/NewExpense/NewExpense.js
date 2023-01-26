import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
	const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
    
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>;
};
