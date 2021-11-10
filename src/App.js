import React, {useState, useRef} from "react";
//import Counter from "./components/Counter";
//import ClassCounter from "./components/ClassCounter"
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    //const [value, setValue] = useState('Text input')
    const [posts, setPosts] = useState([
        {id:1, title:'Javascript', body: 'Descriptions'},
        {id:2, title:'Python', body: 'Descriptions1'},
        {id:3, title:'Java', body: 'Descriptions2'},
    ])


    //const bodyInputRef = useRef();//доступ напрямую к дом єлементу

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }



    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Списочек"/>
        </div>
    )



}

export default App;
