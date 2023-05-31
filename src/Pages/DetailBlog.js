import React from "react";
import ava from "../Assets/ava.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailBlog = () => {

  const [blogs, setBlogs] = React.useState([]);
  const {id} = useParams()
  const navigate = useNavigate();

  const getDataById = async () => {
    try {
      const res = await axios.get(`http://34.101.40.188/api/posts/${id}`)
      setBlogs(res.data.data)
    } catch (error) {
      navigate('/notfound')
    }
  }
  
    React.useEffect(() => {
      getDataById()
      // eslint-disable-next-line
    }, []);
  

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <p className="mt-20 text-5xl font-bold tracking-tight mb-6">
          {blogs.title}
        </p>
        <hr />
        <div className="flex my-1">
          <img src={ava} alt="" className="w-16" />
          <div className="ml-3">
            <p className="font-medium text-xl">{blogs.writer?.username}</p>
            <p className="text-lg">{blogs.created_at}</p>
          </div>
          <div className="my-auto ml-auto mr-2">
            <button className="bg-pink-300 py-2 px-4 text-lg font-medium rounded active:bg-pink-400">
              Like
            </button>
          </div>
        </div>
        <hr />
        <p className="text-lg mt-6">
          {blogs.blog_content}
        </p>
      </div>
    </div>
  );
};

export default DetailBlog;
