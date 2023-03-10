import { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
	const [itemTitle, setItemTitle] = useState(title);

	const clickHandler = () => {
		itemTitle === title ? setItemTitle("updated") : setItemTitle(title);
	};

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">${amount}</div>
				</div>
				<button onClick={clickHandler}>Change title</button>
			</Card>
		</li>
	);
}

export default ExpenseItem;
