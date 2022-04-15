import MyPosts from "../../../pages/MyPosts";
import PostIdPage from "../../../pages/PostIdPage";
import Login from "../../../pages/Login";

export const privateRoutes = [
    {path: "/posts", element: <MyPosts/>, exact: true},
    {path: "/posts/:id", element: <PostIdPage/>, exact: true}
]

export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true}
]
