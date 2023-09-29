import { Route, Routes } from "react-router-dom";
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
import Unauthorized from "./pages/Unauthorized";
import UserManagement from "./pages/UserManagement";
import PersistLogin from "./features/auth/PersistLogin";
import SignInPassword from "./pages/SignInPassword";
import RequireAuth from "./features/auth/RequireAuth";
import {
	ThemeProvider,
	createTheme,
	outlinedInputClasses,
	useTheme,
} from "@mui/material";

const customTheme = (outerTheme) =>
	createTheme({
		palette: {
			mode: outerTheme.palette.mode,
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						"--brandGreen": "#6dd19d",
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: "var(--brandGreen)",
						},
						[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
							{
								borderColor: "var(--brandGreen)",
							},
					},
				},
			},
		},
	});

const App = () => {
	const outerTheme = useTheme();

	return (
		<ThemeProvider theme={customTheme(outerTheme)}>
			<Routes>
				{/* public routes */}
				<Route index element={<Home />} />
				<Route path="unauthorized" element={<Unauthorized />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="sign-in-password" element={<SignInPassword />} />
				<Route path="password-reset" element={<PasswordReset />} />
				<Route path="set-password" element={<SetPassword />} />

				{/* protected routes */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth allowedRoles={["admin"]} />}>
						<Route path="/" element={<Layout />}>
							<Route path="stats" element={<Stats />} />
							<Route
								path="user-management"
								element={<UserManagement />}
							/>
							<Route
								path="content-management"
								element={<ContentManagement />}
							/>
							<Route
								path="admin-users"
								element={<AdminUsers />}
							/>
							<Route path="settings" element={<Settings />} />
						</Route>
					</Route>
				</Route>

				{/* catch-all */}
				<Route path="*" element={<Error />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
