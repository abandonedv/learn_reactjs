import React, {useEffect, useState} from "react";
import "./styles/App.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MyPosts from "./pages/MyPosts";
import MyButton from "./components/UI/button/MyButton";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";


function App() {

    const [isAuth, setIsAuth] = useState(true)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem("auth")) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    // const [posts, setPosts] = useState([]);
    // const [filter, setFilter] = useState({sort: "", query: ""});
    // const [modal, setModal] = useState(false);
    // const [totalPages, setTotalPages] = useState(0)
    // const [limit, setLimit] = useState(10)
    // const [page, setPage] = useState(1)
    //
    // const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    //
    // // const [isPostsLoading, setPostsLoading] = useState(false);
    // const [fetchPosts,
    //     isPostsLoading,
    //     postError] =
    //     useFetching(async () => {
    //             const response = await PostService.getAll(limit, page);
    //             setPosts(response.data);
    //             const totalCount = response.headers["x-total-count"]
    //             setTotalPages(getPageCount(totalCount, limit));
    //         }
    //     )
    //
    // useEffect(() => {
    //     fetchPosts()
    // }, [page])
    //
    // const createPost = (newPost) => {
    //     setPosts([...posts, newPost])
    //     setModal(false)
    // }
    //
    // // async function fetchPosts() {
    // //     setPostsLoading(true);
    // //     const posts = await PostService.getAll()
    // //     setPosts(posts)
    // //     setPostsLoading(false);
    // // }
    //
    // const removePost = (post) => {
    //     setPosts(posts.filter(p => p.id !== post.id));
    // }
    //
    // const changePage = (page) => {
    //     setPage(page)
    //     fetchPosts()
    // }

    return (
        // <div className="App">
        //     <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        //         Создать пользователя
        //     </MyButton>
        //     <MyModal visible={modal} setVisible={setModal}>
        //         <PostForm create={createPost}/>
        //     </MyModal>
        //     <hr style={{margin: "15px 0"}}/>
        //     <PostFilter
        //         filter={filter}
        //         setFilter={setFilter}
        //     />
        //     {postError &&
        //         <h1>Произошла ошибка {postError}</h1>
        //     }
        //
        //     {isPostsLoading
        //         ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
        //         : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
        //     }
        //     <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        // </div>
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
