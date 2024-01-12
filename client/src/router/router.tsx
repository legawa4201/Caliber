import { createBrowserRouter } from "react-router-dom";

import { RegisterPage, LoginPage, HomePage, MyJobPage } from "../views";

const router = createBrowserRouter([
    {
        path: `/register`,
        element: <RegisterPage />
    },
    {
        path: `/login`,
        element: <LoginPage />
    },
    {
        path: `/`,
        element: <HomePage />
    },
    {
        path: `/my-jobs`,
        element: <MyJobPage />
    }
]);

export default router;

