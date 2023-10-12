import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import Home from "@router/pages/Home";
import DefaulLayout from "@components/layouts/DefaultLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: DefaulLayout,
        children: [
            {
                index: true, 
                Component: Home
            }
        ]
    },
]);

export const MainRouter: React.FC = () => {
    return (
        <>
        <RouterProvider router={router}/>
        </>
    )
}