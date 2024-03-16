import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Join from "../Pages/Join";
import App from "../../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <h1>Error Page</h1>,
    children : [
              {
                            path : '/',
                            element : <Home></Home>
              },
              {
                            path : '/join',
                            element : <Join></Join>
              }
    ]
  },
]);

export default router;