import React, { useEffect, useState } from "react";
import userContext from "./Context";

function Provider({ children }) {

const [isAuthenticated, setIsAuthenticated] = useState(false);
const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const login = () => {
    setIsAuthenticated(true);
  };


  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <userContext.Provider value={{ count, incrementCount , isAuthenticated, login, logout }}>
        {children}
        
      </userContext.Provider>
    </div>
  );
}

export default Provider;
