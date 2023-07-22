import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from"./Components/Header";
import Body from "./Components/Body";
import Fotter from "./Components/Fotter";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Error from "./Components/Error";
import Search from "./Components/Search";
import Cart from "./Components/Cart";
import Sigin from "./Components/SigIn";
import Offer from "./Components/Offer";
import Help from "./Components/Help";

const AppLayout=(()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Fotter/>
        </>
    );
})

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/search",
                element:<Search/>
            },
            {
                path:"/offer",
                element:<Offer/>
            },
            {
                path:"/help",
                element:<Help/>
            },
            {
                path:"/sigin",
                element:<Sigin/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);