import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('cafe.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return <div className="w-2/3">
    
    {
        blogs.map(blog=><Blog key={blog.id}

             handleAddToBookmark={handleAddToBookmark} 
             handleMarkAsRead={handleMarkAsRead} 
             blog={blog}></Blog>)
    }
  

  </div>;
};

export default Blogs;
