import React, { useContext, useEffect } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import MyBlogCard from "../Components/MyBlogCard";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const MyBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const [blogs, setBlogs] = React.useState([]);
  
  const getDataByUser = async () => {
    const res = await axios.get('http://34.101.40.188/api/posts')
    const id = [user.id]
    const data = res.data.data
    const filteredData = data.filter(d => id.includes(d.author))
    setBlogs(filteredData)
  }

  const deleteData =  (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your post has been deleted.',
          'success'
        )
        await axios.delete(`http://34.101.40.188/api/posts/${id}`,{
          headers : {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
          }
        })
      }
      getDataByUser()
    })
  }

  useEffect(() => {
    if (!user) navigate("/login");
    getDataByUser()
    // eslint-disable-next-line
  }, [user,navigate]);

  return (
    <div>
      <div className="max-w-2xl mt-16 mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-5xl font-bold tracking-tight mb-6">Blog Saya</p>
          <Link to="/addblog">
            <PrimaryButton className="p-2">Tambah Blog +</PrimaryButton>
          </Link>
        </div>
        <hr />


        {blogs.length > 0 ? blogs.map((blog) => (
        
        <MyBlogCard  
        key={blog.id}
        id={blog.id}
        title={blog.title}
        author={blog.writer.username}
        content={blog.blog_content.substring(0,100)}
        time={blog.created_at}
        onClick={() => deleteData(blog.id)}
        />
        )) : (
          <>no data</>
        )}

      </div>
    </div>
  );
};

export default MyBlog;
