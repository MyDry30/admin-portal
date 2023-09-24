import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./features/layout";
import AdminUsers from "./pages/AdminUsers";
import ContentManagement from "./pages/ContentManagement";
import Error from "./pages/Error";
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset";
import SetPassword from "./pages/SetPassword";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import Stats from "./pages/Stats";
import UserManagement from "./pages/UserManagement";

const App = () => {
	return (
		<Routes>
			{/* public routes */}
			<Route index element={<Home />} />
			<Route path="sign-in" element={<SignIn />} />
			<Route path="password-reset" element={<PasswordReset />} />
			<Route path="set-password" element={<SetPassword />} />

			{/* protected routes */}
			<Route path="/" element={<Layout />}>
				<Route path="stats" element={<Stats />} />
				<Route path="user-management" element={<UserManagement />} />
				<Route
					path="content-management"
					element={<ContentManagement />}
				/>
				<Route path="admin-users" element={<AdminUsers />} />
				<Route path="settings" element={<Settings />} />

				{/* catch-all */}
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};

export default App;
