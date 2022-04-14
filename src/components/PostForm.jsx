import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({title: "", body: ""})

    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    type="test"
                    placeholder="Название поста"
                />
                <MyInput
                    value={post.body}
                    onChange={event => setPost({...post, body: event.target.value})}
                    type="test"
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    );
};

export default PostForm