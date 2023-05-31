import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import TextInput from "../Components/TextInput";
import AuthLayout from "../Layouts/AuthLayout";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const token = localStorage.getItem("authToken");
  const [errors, setErrors] = useState({});

  const addData = async (e) => {
    e.preventDefault()
    setErrors({});
    try {
      await axios.post('http://34.101.40.188/api/posts',{
          title ,
          blog_content: content
        },{
          headers : {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
          }
        })
        Swal.fire(
          'Berhasil!',
          'Blog Berhasil ditambahkan',
          'success'
        )
        navigate('/myblog')
    } catch (error) {
      const pesanError = error.response.data.message
      setErrors(error.response.data.errors);
      Swal.fire(
        'error',
        pesanError,
        'error'
      )
    }
  }

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user,navigate]);

  return (
    <>
      <AuthLayout>
        <h1 className="font-medium text-2xl">Add Blog</h1>

        <form onSubmit={addData} className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="judul">Judul</label>
              <TextInput
                type="text"
                id="judul"
                placeholder="Judul Blog"
                className={`block w-full ${
                  errors.title && "border-red-500"
                }`}
                onChange={(e) => setTitle(e.target.value)}
              />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title[0]}
                  </p>
                )}
            </div>

            <div>
              <label htmlFor="konten">Konten Blog</label>
              <textarea 
              onChange={(e) => setContent(e.target.value)} 
              className={`border p-2.5 rounded-lg block w-full ${
                errors.blog_content && "border-red-500"
              }`}
              ></textarea>
                              {errors.blog_content && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.blog_content[0]}
                  </p>
                )}
            </div>

            <PrimaryButton className="w-full">Submit</PrimaryButton>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default AddBlog;
