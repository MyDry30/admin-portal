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
import UserManagementActive from "./pages/UserManagementActive";
import UserManagementInactive from "./pages/UserManagementInactive";
import AppUser from "./pages/AppUser";
import ContentManagementChallenge from "./pages/ContentManagementChallenge";
import ContentManagementCoaches from "./pages/ContentManagementCoaches";
import ContentMangementToolkit from "./pages/ContentMangementToolkit";
// import ContentManagementForums from "./pages/ContentManagementForums";
import ContentManagementMedia from "./pages/ContentManagementMedia";
import AdminUsersActive from "./pages/AdminUsersActive";
import AdminUsersDisabled from "./pages/AdminUsersDisabled";
import AdminUser from "./pages/AdminUser";
import NewAdminUser from "./pages/NewAdminUser";
import ContentManagementDay from "./pages/ContentManagementDay";
import ContentManagementDayAddTask from "./pages/ContentManagementDayAddTask";
import ContentManagementAddCoach from "./pages/ContentManagementAddCoach";
import ContentManagementCoach from "./pages/ContentManagementCoach";
import ContentManagementAddForum from "./pages/ContentManagementAddForum";
import ContentManagementForum from "./pages/ContentManagementForum";
import ContentManagementAddMedia from "./pages/ContentManagementAddMedia";
import ContentManagementMediaSingle from "./pages/ContentManagementMediaSingle";
import ContentManagementChallengeDayTask from "./pages/ContentManagementChallengeDayTask";
import ContentManagementPostChallenge from "./pages/ContentManagementPostChallenge";
import ContentManagementAddDay from "./pages/ContentManagementAddDay";

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
				<Route path="reset-password" element={<SetPassword />} />

				{/* protected routes */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth allowedRoles={["admin"]} />}>
						<Route path="/" element={<Layout />}>
							{/* stats page */}
							<Route path="stats" element={<Stats />} />

							{/* user management page */}
							<Route
								path="user-management"
								element={<UserManagement />}
							>
								<Route
									index
									element={<Navigate to="active" />}
								/>
								<Route
									path="active"
									element={<UserManagementActive />}
								/>
								<Route
									path="inactive"
									element={<UserManagementInactive />}
								/>
							</Route>

							{/* content management page */}
							<Route
								path="content-management"
								element={<ContentManagement />}
							>
								<Route
									index
									element={<Navigate to="30-day-challenge" />}
								/>
								<Route
									path="30-day-challenge"
									element={<ContentManagementChallenge />}
								/>
								<Route
									path="post-challenge"
									element={<ContentManagementPostChallenge />}
								/>
								<Route
									path="coaches"
									element={<ContentManagementCoaches />}
								/>
								<Route
									path="toolkit"
									element={<ContentMangementToolkit />}
								>
									<Route
										index
										element={<Navigate to="media" />}
									/>
									{/* <Route
										path="forums"
										element={<ContentManagementForums />}
									/> */}
									<Route
										path="media"
										element={<ContentManagementMedia />}
									/>
								</Route>
							</Route>
							<Route path="days">
								<Route
									path="add"
									element={<ContentManagementAddDay />}
								/>
								<Route path=":dayNumber">
									<Route
										index
										element={<ContentManagementDay />}
									/>
									<Route path="tasks">
										<Route
											path="add"
											element={
												<ContentManagementDayAddTask />
											}
										/>
										<Route
											path=":taskId"
											element={
												<ContentManagementChallengeDayTask />
											}
										/>
									</Route>
								</Route>
							</Route>
							<Route path="coaches">
								<Route
									path="add"
									element={<ContentManagementAddCoach />}
								/>
								<Route
									path=":coachId"
									element={<ContentManagementCoach />}
								/>
							</Route>
							{/* <Route path="forums">
								<Route
									path="add"
									element={<ContentManagementAddForum />}
								/>
								<Route
									path=":forumId"
									element={<ContentManagementForum />}
								/>
							</Route> */}
							<Route path="media">
								<Route
									path="add"
									element={<ContentManagementAddMedia />}
								/>
								<Route
									path=":mediaId"
									element={<ContentManagementMediaSingle />}
								/>
							</Route>

							{/* admin users page */}
							<Route path="admin-users" element={<AdminUsers />}>
								<Route
									index
									element={<Navigate to="active" />}
								/>
								<Route
									path="active"
									element={<AdminUsersActive />}
								/>
								<Route
									path="disabled"
									element={<AdminUsersDisabled />}
								/>
							</Route>

							{/* users pages */}
							<Route path="users/:userId" element={<AppUser />} />
							<Route path="/users/admin">
								<Route path="add" element={<NewAdminUser />} />
								<Route path=":userId" element={<AdminUser />} />
							</Route>

							{/* settings page */}
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
