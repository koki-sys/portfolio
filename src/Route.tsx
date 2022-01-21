import { HomeLayout } from "layouts/Home"
import { Work } from "pages/Work"
import { Navigate, useRoutes } from "react-router-dom"

export const RootRouter = () => {
    return useRoutes([
        {
            element: <HomeLayout />,

            children: [
                { path: "/", element: <div>Home</div> },
                { path: "/about", element: <div>About</div> },
                { path: "/works", element: <Work /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" /> },
    ])
}
