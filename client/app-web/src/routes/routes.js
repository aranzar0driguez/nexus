// routes.js
import { LandingPage, Login, AllCommunities, HubForumPage } from "../pages";

export const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/home", element: <HubForumPage /> },
  { path: "/login", element: <Login /> },
  { path: "/allCommunities", element: <AllCommunities /> },
];
