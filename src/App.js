import React, {useState} from "react";
//import Counter from "./components/Counter";
//import ClassCounter from "./components/ClassCounter"
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    //const [value, setValue] = useState('Text input')
    const [posts, setPosts] = useState([
        {id:1, title:'Javascript', body: 'Descriptions'},
        {id:2, title:'Python', body: 'Descriptions1'},
        {id:3, title:'Java', body: 'Descriptions2'}
    ])

    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название"/>
                <input type="text" placeholder="Описание"/>
                <button type="submit">Создать пост</button>
            </form>
            <PostList posts={posts} title={"Списочек"}/>
        </div>
    )



}

export default App;
