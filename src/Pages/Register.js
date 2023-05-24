import React, { useContext, useEffect, useState } from "react";
import TextInput from "../Components/TextInput";
import PrimaryButton from "../Components/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const { user } = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  async function handleRegister(e) {
    e.preventDefault();

    setErrors({});
    setIsLoading(true);

    try {
      await axios.post("http://34.101.40.188/api/register", {
        email,
        username,
        password,
        firstname: firstName,
        lastname: lastName,
      });

      navigate("/login", {
        state: {
          message: "Pendaftaran berhasil",
        },
      });
    } catch (error) {
      setErrors(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <AuthLayout>
        <h1 className="font-medium text-2xl">REGISTER</h1>

        <form onSubmit={handleRegister} className="mt-8">
          <div className="space-y-5">
            <div className="flex justify-between space-x-4">
              <div className="w-full">
                <label htmlFor="username">Username</label>
                <TextInput
                  type="text"
                  id="username"
                  className={`block w-full ${
                    errors.username && "border-red-500"
                  }`}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username[0]}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="password">Password</label>
                <TextInput
                  type="password"
                  id="password"
                  className={`block w-full ${
                    errors.password && "border-red-500"
                  }`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password[0]}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <TextInput
                type="email"
                id="email"
                placeholder="email@example.com"
                className={`block w-full ${errors.email && "border-red-500"}`}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
              )}
            </div>

            <div className="flex justify-between space-x-4">
              <div className="w-full">
                <label htmlFor="firstName">First Name</label>
                <TextInput
                  type="text"
                  id="firstName"
                  className={`block w-full ${
                    errors.firstname && "border-red-500"
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstname[0]}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="lastName">Last Name</label>
                <TextInput
                  type="text"
                  id="lastName"
                  className={`block w-full ${
                    errors.lastname && "border-red-500"
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastname[0]}
                  </p>
                )}
              </div>
            </div>

            <PrimaryButton className="w-full" disabled={isLoading}>
              REGISTER
            </PrimaryButton>

            <div>
              Punya akun?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login Disini
              </Link>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
