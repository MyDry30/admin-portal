const forums = [
	{
		title: "Object 1",
		description: "This is the description for Object 1",
		link: "https://example.com/object1",
		status: "active",
	},
	{
		title: "Object 2",
		description: "This is the description for Object 2",
		link: "https://example.com/object2",
		status: "inactive",
	},
	{
		title: "Object 3",
		description: "This is the description for Object 3",
		link: "https://example.com/object3",
		status: "active",
	},
	{
		title: "Object 4",
		description: "This is the description for Object 4",
		link: "https://example.com/object4",
		status: "inactive",
	},
	{
		title: "Object 5",
		description: "This is the description for Object 5",
		link: "https://example.com/object5",
		status: "active",
	},
	{
		title: "Object 6",
		description: "This is the description for Object 6",
		link: "https://example.com/object6",
		status: "inactive",
	},
	{
		title: "Object 7",
		description: "This is the description for Object 7",
		link: "https://example.com/object7",
		status: "active",
	},
	{
		title: "Object 8",
		description: "This is the description for Object 8",
		link: "https://example.com/object8",
		status: "inactive",
	},
	{
		title: "Object 9",
		description: "This is the description for Object 9",
		link: "https://example.com/object9",
		status: "active",
	},
	{
		title: "Object 10",
		description: "This is the description for Object 10",
		link: "https://example.com/object10",
		status: "inactive",
	},
	{
		title: "Object 11",
		description: "This is the description for Object 11",
		link: "https://example.com/object11",
		status: "active",
	},
	{
		title: "Object 12",
		description: "This is the description for Object 12",
		link: "https://example.com/object12",
		status: "inactive",
	},
	{
		title: "Object 13",
		description: "This is the description for Object 13",
		link: "https://example.com/object13",
		status: "active",
	},
	{
		title: "Object 14",
		description: "This is the description for Object 14",
		link: "https://example.com/object14",
		status: "inactive",
	},
	{
		title: "Object 15",
		description: "This is the description for Object 15",
		link: "https://example.com/object15",
		status: "active",
	},
	{
		title: "Object 16",
		description: "This is the description for Object 16",
		link: "https://example.com/object16",
		status: "inactive",
	},
	{
		title: "Object 17",
		description: "This is the description for Object 17",
		link: "https://example.com/object17",
		status: "active",
	},
	{
		title: "Object 18",
		description: "This is the description for Object 18",
		link: "https://example.com/object18",
		status: "inactive",
	},
	{
		title: "Object 19",
		description: "This is the description for Object 19",
		link: "https://example.com/object19",
		status: "active",
	},
	{
		title: "Object 20",
		description: "This is the description for Object 20",
		link: "https://example.com/object20",
		status: "inactive",
	},
];

const getForums = async () => {
	try {
		return { data: forums };
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getForums;
