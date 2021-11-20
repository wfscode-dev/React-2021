import React, {useMemo, useState, useRef, useEffect} from "react";
//import Counter from "./components/Counter";
//import ClassCounter from "./components/ClassCounter"
import '../styles/App.css'
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import {usePosts} from "../hooks/usePosts";
import PostServise from "../API/PostServise";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    //const [value, setValue] = useState('Text input')
    const [posts, setPosts] = useState([])
    //const bodyInputRef = useRef();//доступ напрямую к дом єлементу
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError  ] = useFetching(async (limit, page) => {
        const response = await PostServise.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
            <h1>ERROR</h1>}
            {isPostsLoading
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Списочек"/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />


        </div>
    )

//закончил 2:10

};

export default Posts;
