import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import TextInput from "../Components/TextInput";
import AuthLayout from "../Layouts/AuthLayout";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const EditBlog = () => {
  const { user } = useContext(AuthContext);
  const {id} = useParams()
  const navigate = useNavigate();
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const token = localStorage.getItem("authToken");
  const [errors, setErrors] = useState({});
  
  const getDataById = async () => {
    try {
      const res = await axios.get(`http://34.101.40.188/api/posts/${id}`)
      setTitle(res.data.data.title)
      setContent(res.data.data.blog_content)
    } catch (error) {
      navigate('/notfound')
    }
  }

  const editData = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://34.101.40.188/api/posts/${id}`,{
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
        'Blog Berhasil diubah',
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
    getDataById()
    // eslint-disable-next-line
  }, [user,navigate]);

  return (
    <>
      <AuthLayout>
        <h1 className="font-medium text-2xl">Edit Blog</h1>

        <form onSubmit={editData} className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="judul">Judul</label>
              <TextInput
                value={title}
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
                value={content}
                className={`border p-2.5 rounded-lg block w-full ${
                  errors.blog_content && "border-red-500"
                }`}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
                  {errors.blog_content && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.blog_content[0]}
                  </p>)}
            </div>

            <PrimaryButton className="w-full">Submit</PrimaryButton>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default EditBlog;
