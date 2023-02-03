import React, { Fragment, useState } from "react";
import { AddUser } from "./components/User/AddUser";
import { UsersList } from "./components/User/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	return (
		// this is a fragment
		// <>
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
			{/* </> */}
		</Fragment>
	);
}

export default App;
