import React from "react";
import BlogCard from "../Components/BlogCard";

const Home = () => {
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
        <BlogCard title="Blog Pertamaku" author="Hans Evan" />
        <BlogCard title="Blog Kedua" author="Jess No limit " />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Home;
