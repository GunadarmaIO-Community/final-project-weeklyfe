import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");

    try {
      await axios.get("http://34.101.40.188/api/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "appliation/json",
        },
      });

      localStorage.removeItem("authToken");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error(`Error : ${error}`);
    }
  };

  return (
    <nav className="bg-pink-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <NavLink to="/">Blogio</NavLink>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-2">
              <p className="text-gray-100">{user.firstname}</p>
              <NavLink to="/myblog" className="navlink">
                My Blog
              </NavLink>
              <NavLink onClick={handleLogout} className="navlink">
                Logout
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="navlink">
                Login
              </NavLink>
              <NavLink to="/register" className="navlink">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
