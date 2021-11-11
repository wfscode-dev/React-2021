import React, {useState, useRef} from "react";
//import Counter from "./components/Counter";
//import ClassCounter from "./components/ClassCounter"
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect"

function App() {
    //const [value, setValue] = useState('Text input')
    const [posts, setPosts] = useState([
        {id:1, title:'Javascript', body: 'Descriptions'},
        {id:2, title:'Python', body: 'Descriptions1'},
        {id:3, title:'Java', body: 'Descriptions2'},
    ])


    //const bodyInputRef = useRef();//доступ напрямую к дом єлементу
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
    }





    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка по..."
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
                />
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title="Списочек"/>
                : <h1 style={{textAlign: "center"}}>Постов нет</h1>
            }

        </div>
    )



}

export default App;
