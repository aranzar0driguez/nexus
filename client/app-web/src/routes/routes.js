// routes.js
import { LandingPage, Login } from "../pages";
import  HubForumPage from "../pages/HubForum/HubForumPage"

export const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/home", element: <HubForumPage/> },
  { path: "/login", element: <Login /> },
];
