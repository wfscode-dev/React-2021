import React, {useState} from "react";
//import Counter from "./components/Counter";
//import ClassCounter from "./components/ClassCounter"
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    //const [value, setValue] = useState('Text input')
    const [posts, setPosts] = useState([
        {id:1, title:'Javascript', body: 'Descriptions'},
        {id:2, title:'Python', body: 'Descriptions1'},
        {id:3, title:'Java', body: 'Descriptions2'}
    ])

    const addNewPost = () => {

    }

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="Название"/>
                <MyInput type="text" placeholder="Описание"/>
                <MyButton onClick={addNewPost}>Добавить пост</MyButton>
            </form>
            <PostList posts={posts} title={"Списочек"}/>
        </div>
    )



}

export default App;
