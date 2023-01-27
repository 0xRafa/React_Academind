import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{expenses.map((expenses) => (
					<ExpenseItem
						key={expenses.id}
						title={expenses.title}
						amount={expenses.amount}
						date={expenses.date}
					/>
				))}
			</Card>
		</div>
	);
};
