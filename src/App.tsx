import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import SinglePost from './Component/SinglePost';
import SinglePostPage from './Pages/SinglePostPage';
import Login from './Component/Login';
import Register from './Component/Register';
import PostByCategory from './Component/PostByCategory';
import Navigation from './Component/NavBar';

function App() {

  return (


    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/singlepost' element={<SinglePostPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Post/:Category' element={<PostByCategory />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
