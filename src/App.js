import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/UI/AppRouter/AppRouter";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>

    )
};//2:22

export default App;
