import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";
import AddRobot from "../pages/AddRobot"

export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/add',
                element: <AddRobot/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
]