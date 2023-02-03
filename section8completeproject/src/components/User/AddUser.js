import { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUserName.trim().length === 0 || enteredAge.trim() === 0) {
			setError({
				title: "Invalid Input",
				message: "No empty values are allowed",
			});
		}

		if (+enteredAge < 1) {
			setError({
				title: "Wrong input",
				message: "No negative numbers are allowed",
			});
		}
		props.onAddUser(enteredUserName, enteredAge);
		setEnteredUserName("");
		setEnteredAge("");
	};

	const userNameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper> 
			{error && (
				<ErrorModal
					onConfirm={errorHandler}
					title={error.title}
					message={error.message}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUserName}
						onChange={userNameChangeHandler}
					/>
					<label htmlFor="age">Age</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">AddUser</Button>
				</form>
			</Card>
			</Wrapper>
	);
};
