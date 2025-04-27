import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";



function App() {
  

  const [bookmarks,setBookmarks]=useState([]) 
  const[readTime,setReadTime]=useState(0)


  const handleAddToBookmark=(blog)=>{
   const {title}=blog
    const newBookmarks=[...bookmarks,title]
    setBookmarks(newBookmarks)
    

  }

  const handleMarkAsRead=(readingTime,title2)=>{
    
    const newReadTime=readTime+readingTime
    setReadTime(newReadTime)
    const newAddedBookmark=  bookmarks.filter(title=> title!==title2 )
    setBookmarks(newAddedBookmark)

  }
   
  return (
    <>
      <div className="container mx-auto mt-10 exo">
      <Header></Header>
      <div className="flex justify-between">
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks> 
      </div>
      </div>
      
    </>
  );
}

export default App;
