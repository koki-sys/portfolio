import { HomeLayout } from "layouts/Home"
import { Navigate, useRoutes } from "react-router-dom"

export const RootRouter = () => {
    return useRoutes([
        {
            element: <HomeLayout />,

            children: [
                { path: "/", element: <div>Home</div> },
                { path: "/about", element: <div>About</div> },
                { path: "/profile", element: <div>Profile</div> },
            ],
        },
        { path: "*", element: <Navigate to="/404" /> },
    ])
}
