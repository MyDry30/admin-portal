const tasks = [
	{
		id: 1,
		type: "reading",
		title: "Reading Title",
		description: "Dummy reading description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
	{
		id: 2,
		type: "reading",
		title: "Reading Title",
		description: "Dummy reading description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
	{
		id: 3,
		type: "journaling",
		title: "Journaling Title",
		description: "Dummy journaling description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
	{
		id: 4,
		type: "journaling",
		title: "Journaling Title",
		description: "Dummy journaling description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
	{
		id: 5,
		type: "media",
		title: "Media Title",
		description: "Dummy media description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
	{
		id: 6,
		type: "media",
		title: "Media Title",
		description: "Dummy media description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
	{
		id: 7,
		type: "questionnaire",
		title: "Questionnaire Title",
		description: "Dummy questionnaire description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
	{
		id: 8,
		type: "questionnaire",
		title: "Questionnaire Title",
		description: "Dummy questionnaire description",
		status: "incomplete",
		timeLimit: 12,
		expectedTime: 34,
		content: "this is the content",
		image: "https://www.link.com",
	},
];

const getTasksByDay = async (dayId) => {
	try {
		return tasks;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getTasksByDay;
