import React from "react";
import BlogCard from "../Components/BlogCard";
import axios from "axios";

const Home = () => {
  
  const [blogs, setBlogs] = React.useState([]);
  
  const getData = async () => {
    const res = await axios.get('http://34.101.40.188/api/posts')
    setBlogs(res.data.data)
  }
  
    React.useEffect(() => {
      getData()
    }, []);
  
  return (
    <>
      <div
        className="mx-auto bg-cover bg-center p-24 bg-slate-800 mb-16"
        style={{
          backgroundImage:
            "url('https::/source.unsplash.com/1000x600?computer')",
        }}
      >
        <p className="text-5xl text-center font-bold text-white">The Blogio</p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center">

        {blogs.length > 0 ? blogs.map((blog) => (
  
        <BlogCard  
        key={blog.id}
        id={blog.id}
        title={blog.title}
        author={blog.writer.username}
        content={blog.blog_content}
        time={blog.created_at}
        />
        )) : (
          <>no data</>
        )}

      </div>
    </>
  );
};

export default Home;
