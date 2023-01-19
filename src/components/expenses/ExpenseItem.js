import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
	
	const clickHandler = () => {
		console.log("cliqued")
	}
	
	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
			<button onClick={clickHandler}>
				Change title
			</button>
		</Card>
	);
}

export default ExpenseItem;
