import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Post from "./Post";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "./api/post";
import EditPost from "./EditPost";
import useWindowSize from "./Hooks/useWindowSize";
import useAxiosFetch from "./Hooks/useAxiosFetch";
import {DataProvider} from "./context/DataContext";

function App() {

  return (
    <div className="App">
      <DataContext>
      <Header title="HeartBreak"/>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route path="post">
          <Route
            index
            element={
              <NewPost />
            }
          />
          <Route
            path=":id"
            element={<PostPage />}
          />
        </Route>
        <Route
          path="/edit/:id"
          element={
            <EditPost />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
      </DataContext>
    </div>
  );
}

export default App;
