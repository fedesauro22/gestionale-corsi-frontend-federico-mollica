import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Courses } from "../pages/Courses/Courses";
import { MainLayout } from "../components/layouts/MainLayout/MainLayout";
import { Users } from "../pages/Users/Users";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { Course } from "../pages/Course/Course";
const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "courses/",
                children: [
                    {
                        path: "",
                        element: <Courses />,
                    },
                    {
                        path: "course/:id",
                        element: <Course />,
                    },
                ],
            },
            {
                path: "users/",
                element: <Users />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export function Routes() {
    return <RouterProvider router={routes} />;
}
