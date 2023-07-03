import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  
  const[posts,setPosts]= useState([]);

  useEffect(()=>{
    const fetchPosts =async ()=>{
     const res = await axios.get("posts")
     console.log(res)
    }
    fetchPosts()
  },[])

  return (
    <>
      <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}
