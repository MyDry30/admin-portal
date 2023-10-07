const users = [];
for (let i = 0; i < 20; i++) {
	users.push({
		id: users.length + 1,
		role: i % 2 === 0 ? "admin" : "user",
		status: "active",
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@tepia.co",
		journey: i % 2 === 0 ? "dry" : "moderation",
		lastActive: "12/04/23 @ 12:30pm PT",
		createdAt: "11/04/23 @ 09:30am PT",
	});
	users.push({
		id: users.length + 1,
		role: i % 2 === 0 ? "user" : "admin",
		status: "disabled",
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@tepia.co",
		journey: i % 2 === 0 ? "moderation" : "dry",
		lastActive: "12/04/23 @ 12:30pm PT",
		createdAt: "11/04/23 @ 09:30am PT",
	});
}

const getAppUsers = async () => {
	try {
		return { data: users };
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getAppUsers;
