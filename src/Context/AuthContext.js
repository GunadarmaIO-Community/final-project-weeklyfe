import axios from "axios";
import React, { createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

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

      if (response.status == 200) {
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(`Error : ${error}`);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
