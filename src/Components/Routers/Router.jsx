import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../HomePage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
