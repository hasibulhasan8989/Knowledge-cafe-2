const Blog = ({ blog ,handleAddToBookmark,handleMarkAsRead}) => {
  const {
    title,
    author,
    posted_date,
    reading_time,
    hashtags,
    cover,
    author_img,
  } = blog;


  return (
    <div className="space-y-8 mb-28">
      <img
        src={cover}
        className="max-w-[845px] max-h-[450px]
    rounded-2xl"
        alt=""
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={author_img} className="w-16 h-16 rounded-full" alt="" />
          <div>
            <p>{author}</p>

            <p>{posted_date}</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-center">{reading_time}min read</p>
          <button onClick={()=>{handleAddToBookmark(blog)}} className="btn btn-warning text-black">Add To Bookmark</button>
        </div>
      </div>

      <p className="w-[737px] text-5xl font-bold">{title}</p>
      {hashtags.map((tag,idx) => (
        <span  key={idx} className="m-2 font-semibold text-gray-500">{tag}</span>
      ))}
      <br />
      <button onClick={()=>{handleMarkAsRead(reading_time,title)}}  className="btn btn-primary mt-4">Mark As Read</button>

    </div>
  );
};

export default Blog;
