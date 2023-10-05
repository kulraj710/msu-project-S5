import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import styles from "../../styles/Home/Input.module.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
// import Divider from '@mui/material/Divider';

const UserInput = ({ chatArray, setChatArray }) => {
	const [userInput, setUserInput] = useState("");
	const messagesRef = collection(db, "chatHistory");

	const submitHandler = async e => {
		e.preventDefault();
		if (userInput === "") return;

		await addDoc(messagesRef, {
			chatArray: [
				{
					text: userInput,
					sender: 0,
					user: auth.currentUser.displayName,
				},
			],
			createdAt: serverTimestamp(),
		});
		setChatArray([
			...chatArray,
			{ id: 2, message: userInput, time: new Date(), sender: 0 },
		]);
		setUserInput("");
	};

	return (
		<div className={styles.container}>
			<div>
				<form onSubmit={submitHandler}>
					<OutlinedInput
						placeholder="Enter text here"
						value={userInput}
						onChange={e => {
							setUserInput(e.target.value);
						}}
						fullWidth
						style={{ height: "100px" }}
						endAdornment={
							<InputAdornment position="end">
								<IconButton type="submit">
									<SendIcon />
								</IconButton>
							</InputAdornment>
						}
					/>
				</form>
			</div>
		</div>
	);
};

export default UserInput;
