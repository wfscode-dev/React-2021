import React, {useMemo, useState, useRef} from "react";
//import Counter from "./components/Counter";
//import ClassCounter from "./components/ClassCounter"
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect"
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./components/hooks/usePosts";

function App() {
    //const [value, setValue] = useState('Text input')
    const [posts, setPosts] = useState([])
    //const bodyInputRef = useRef();//доступ напрямую к дом єлементу
    const [filter, setFilter] = useState({sort:'',query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
//остановился на 1:36
    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Списочек"/>
        </div>
    )



}

export default App;
