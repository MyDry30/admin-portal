const convertTime = (militaryTime) => {
	let timeArray = militaryTime.split(":");
	let hours = parseInt(timeArray[0]);
	let minutes = timeArray[1];
	let period = hours >= 12 ? "PM" : "AM";
	hours = hours % 12 || 12;
	return hours + ":" + minutes + " " + period;
};

const convertDate = (date) => {
	const [year, month, day] = date.split("-");
	return `${month}-${day}-${year}`;
};

const prettifyDate = (dateTime) => {
	const dateObj = new Date(dateTime);
	const date = dateObj.toISOString();
	const formattedDate = convertDate(date.slice(0, 10));
	const formattedTime = convertTime(date.slice(11, 16));
	return `${formattedTime} ${formattedDate}`;
};

export default prettifyDate;
