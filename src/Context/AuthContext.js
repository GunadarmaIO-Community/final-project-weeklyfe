import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.get("http://34.101.40.188/api/myid", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(`Error : ${error}`);
    } finally{
      setIsLoading(false)
    }
  };
  if(isLoading)return<>Loading...</>

  return (
    <AuthContext.Provider value={{ user, setUser, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
