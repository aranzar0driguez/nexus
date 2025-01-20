// routes.js
import { LandingPage, Login } from "../pages";

export const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
];
