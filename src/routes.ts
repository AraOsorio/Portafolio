import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import MiraApp from "./pages/MiraApp";
import GraphicProject from "./pages/GraphicProject";


export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "works/mira-app", Component: MiraApp },
      { path: "graphic-projects/:slug", Component: GraphicProject },
      { path: "works/:slug", Component: CaseStudy },
    ],
  },
]);
