import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks,readTime}) => {
    return (
        <div className="w-2/8">
          <h1 className="text-2xl text-[#85193C] border px-12 py-6 rounded-2xl bg-[#F1BA88]">Spent time on read : {readTime} </h1>  
          <div className="mt-4 min-h-[440px] bg-[#D4C9BE] p-6  rounded-2xl">
            <h2 className="text-2xl font-semibold text-orange-500">Bookmarked Blogs : {bookmarks.length}</h2>
            {
              bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
          </div>

        </div>
    );
};

export default Bookmarks;