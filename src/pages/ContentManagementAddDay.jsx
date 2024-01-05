import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import { useNavigate } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Modal from "../features/ui/modal/Modal";
import { TextField } from "@mui/material";
import Container from "../features/ui/container/Container";
import Button from "../features/ui/button/Button";
import addDay from "../features/api/days/addDay";
import getDays from "../features/api/getDays";

const ContentManagementAddDay = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();

	const [textContent, setTextContent] = useState("");

	const [quoteTitle, setQuoteTitle] = useState("");
	const [quoteContent, setQuoteContent] = useState("");
	const [quoteAuthor, setQuoteAuthor] = useState("");

	const findMaxDay = (days) => {
		let max = days[0].number;
		days.forEach((day) => {
			if (day.number > max) {
				max = day.number;
			}
		});
		return max;
	};

	const handleAddDay = async () => {
		if (!textContent) return alert("Text content is required.");
		if (!quoteTitle) return alert("Quote title is required.");
		if (!quoteContent) return alert("Quote content is required.");
		if (!quoteAuthor) return alert("Quote author is required.");

		try {
			const response = await getDays(user.accessToken);
			const nextDay = findMaxDay(response.data) + 1;

			const dayResponse = await addDay(user.accessToken, {
				number: nextDay,
				text: textContent,
				quote: {
					title: quoteTitle,
					content: quoteContent,
					author: quoteAuthor,
				},
			});

			alert(`Day ${dayResponse.data.number} has been created.`);
			navigate("/content-management/post-challenge");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<ControlBar>
				<div className="flex-row align-center column-gap-1">
					<MdArrowBack
						onClick={() => navigate(-1)}
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
					<h2>Content Management / Add Day</h2>
				</div>
				<Button type="filled" onClick={handleAddDay}>
					Add Day
				</Button>
			</ControlBar>
			<Container>
				<Modal>
					<div className="flex-column row-gap-2">
						<div className="flex-row justify-sb">
							<h2>Text of the Day</h2>
						</div>
						<div
							className="flex-column row-gap-1"
							style={{ width: "400px" }}
						>
							<TextField
								label="Content"
								value={textContent}
								onChange={(e) => setTextContent(e.target.value)}
							/>
						</div>
					</div>
				</Modal>
				<Modal>
					<div className="flex-column row-gap-2">
						<div className="flex-row justify-sb">
							<h2>Daily Quote</h2>
						</div>
						<div
							className="flex-column row-gap-1"
							style={{ width: "400px" }}
						>
							<TextField
								label="Quote Title"
								value={quoteTitle}
								onChange={(e) => setQuoteTitle(e.target.value)}
							/>
							<TextField
								label="Quote Content"
								value={quoteContent}
								onChange={(e) =>
									setQuoteContent(e.target.value)
								}
							/>
							<TextField
								label="Quote Author"
								value={quoteAuthor}
								onChange={(e) => setQuoteAuthor(e.target.value)}
							/>
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementAddDay;
