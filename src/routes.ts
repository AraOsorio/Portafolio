import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import MiraApp from "./pages/MiraApp";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "works/mira-app", Component: MiraApp },
      { path: "works/:slug", Component: CaseStudy },
    ],
  },
]);
