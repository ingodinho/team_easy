import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Registration from "../pages/User/Registration/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/register",
        element: <Registration/>
    }
])

export default router;
