import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Join from "../Pages/Join";
import App from "../../App";
import Saved from "../Pages/Saved";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/join",
        element: <Join></Join>,
      },
      {
        path: "/saved",
        element: <Saved></Saved>,
      },
    ],
  },
]);

export default router;