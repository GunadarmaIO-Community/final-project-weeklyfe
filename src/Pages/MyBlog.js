import React, { useContext, useEffect } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import MyBlogCard from "../Components/MyBlogCard";
import { AuthContext } from "../Context/AuthContext";

const MyBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

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

        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
      </div>
    </div>
  );
};

export default MyBlog;
