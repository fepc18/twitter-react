import Home from "../page/Home";
import User from "../page/User";
import Users from "../page/Users";
import Error404 from "../page/Error404";

export default [
    {
        path: "/",
        exact: true,
        page: Home,
    },
    {
        path: "/:id",
        exact: true,
        page: User,
    },
    {
        path: "/users",
        exact: true,
        page: Users,
    },
    {
        path: "*",
        page: Error404,
    },
]