import React, {useEffect, useRef, useState} from "react";
import "../styles/App.css"
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import Loader from "../components/UI/Loader/Loader";
import {useObserver} from "../hooks/useObserver";



function MyPosts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    // const [isPostsLoading, setPostsLoading] = useState(false);
    const [fetchPosts,
        isPostsLoading,
        postError] =
        useFetching(async () => {
                const response = await PostService.getAll(limit, page);
                setPosts([...posts, ...response.data]);
                const totalCount = response.headers["x-total-count"]
                setTotalPages(getPageCount(totalCount, limit));
            }
        )

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // async function fetchPosts() {
    //     setPostsLoading(true);
    //     const posts = await PostService.getAll()
    //     setPosts(posts)
    //     setPostsLoading(false);
    // }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка {postError}</h1>
            }

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
            <div ref={lastElement} style={{height: 20, background: "red"}}></div>
            {isPostsLoading &&
                <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
            }

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default MyPosts;