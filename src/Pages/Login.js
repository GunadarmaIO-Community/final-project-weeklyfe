import React, { useContext, useEffect, useState } from "react";
import TextInput from "../Components/TextInput";
import PrimaryButton from "../Components/PrimaryButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { user, checkLoginStatus } = useContext(AuthContext);

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  async function handleLogin(e) {
    e.preventDefault();

    setErrors({});
    setIsLoading(true);

    try {
      const response = await axios.post("http://34.101.40.188/api/login", {
        email,
        password,
      });

      localStorage.setItem("authToken", response.data);
      checkLoginStatus();
      navigate("/");
    } catch (error) {
      setErrors(error.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <AuthLayout>
        {state?.message && (
          <div
            className={`bg-pink-100 border border-pink-300 text-pink-500 p-2 rounded mb-4`}
          >
            {state?.message}
          </div>
        )}

        <h1 className="font-medium text-2xl">LOGIN</h1>

        <form onSubmit={handleLogin} className="mt-8">
          <div className="space-y-5">
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

            <div>
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

            <PrimaryButton className="w-full" disabled={isLoading}>
              LOGIN
            </PrimaryButton>

            <div>
              Gapunya akun ?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Daftar Disini
              </Link>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
