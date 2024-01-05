const media = [
	{
		id: 1,
		title: "Media 1",
		type: "audio",
		description: "This is an audio file",
		status: "active",
	},
	{
		id: 2,
		title: "Media 2",
		type: "video",
		description: "This is a video clip",
		status: "inactive",
	},
	{
		id: 3,
		title: "Media 3",
		type: "audio",
		description: "Another audio file",
		status: "active",
	},
	{
		id: 4,
		title: "Media 4",
		type: "video",
		description: "Another video clip",
		status: "inactive",
	},
	{
		id: 5,
		title: "Media 5",
		type: "audio",
		description: "One more audio file",
		status: "active",
	},
	{
		id: 6,
		title: "Media 6",
		type: "video",
		description: "One more video clip",
		status: "inactive",
	},
	{
		id: 7,
		title: "Media 7",
		type: "audio",
		description: "Yet another audio file",
		status: "active",
	},
	{
		id: 8,
		title: "Media 8",
		type: "video",
		description: "Yet another video clip",
		status: "inactive",
	},
	{
		id: 9,
		title: "Media 9",
		type: "audio",
		description: "Description for Media 9",
		status: "active",
	},
	{
		id: 10,
		title: "Media 10",
		type: "video",
		description: "Description for Media 10",
		status: "inactive",
	},
	{
		id: 11,
		title: "Media 11",
		type: "audio",
		description: "Description for Media 11",
		status: "active",
	},
	{
		id: 12,
		title: "Media 12",
		type: "video",
		description: "Description for Media 12",
		status: "inactive",
	},
	{
		id: 13,
		title: "Media 13",
		type: "audio",
		description: "Description for Media 13",
		status: "active",
	},
	{
		id: 14,
		title: "Media 14",
		type: "video",
		description: "Description for Media 14",
		status: "inactive",
	},
	{
		id: 15,
		title: "Media 15",
		type: "audio",
		description: "Description for Media 15",
		status: "active",
	},
	{
		id: 16,
		title: "Media 16",
		type: "video",
		description: "Description for Media 16",
		status: "inactive",
	},
	{
		id: 17,
		title: "Media 17",
		type: "audio",
		description: "Description for Media 17",
		status: "active",
	},
	{
		id: 18,
		title: "Media 18",
		type: "video",
		description: "Description for Media 18",
		status: "inactive",
	},
	{
		id: 19,
		title: "Media 19",
		type: "audio",
		description: "Description for Media 19",
		status: "active",
	},
	{
		id: 20,
		title: "Media 20",
		type: "video",
		description: "Description for Media 20",
		status: "inactive",
	},
];

const getMedia = async () => {
	try {
		return { data: media };
	} catch (err) {
		throw new Error(err);
	}
};

export default getMedia;
