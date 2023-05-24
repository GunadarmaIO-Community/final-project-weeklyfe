import React, { useContext, useEffect } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import TextInput from "../Components/TextInput";
import AuthLayout from "../Layouts/AuthLayout";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <>
      <AuthLayout>
        <h1 className="font-medium text-2xl">Add Blog</h1>

        <form className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="judul">Judul</label>
              <TextInput
                type="text"
                id="judul"
                placeholder="Judul Blog"
                className="block w-full"
              />
            </div>

            <div>
              <label htmlFor="konten">Konten Blog</label>
              <textarea className="border p-2.5 rounded-lg block w-full"></textarea>
            </div>

            <PrimaryButton className="w-full">Submit</PrimaryButton>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default AddBlog;
