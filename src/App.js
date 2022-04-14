import React, {useState} from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "JavaScript", body: "Description"},
        {id: 3, title: "JavaScript", body: "Description"},
        {id: 4, title: "JavaScript", body: "Description"},
        {id: 5, title: "JavaScript", body: "Description"}]
    );

    const creatPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    
    return (
        <div className="App">
            <PostForm create={creatPost}/>
            <PostList posts={posts} title={"Список постов"}/>
        </div>
    );
}

export default App;
