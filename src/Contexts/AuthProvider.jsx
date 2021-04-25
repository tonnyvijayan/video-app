import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setlogin] = useState(false);

  useEffect(() => {
    const userLoginState = JSON.parse(localStorage.getItem("login"));
    console.log({ userLoginState });
    setlogin(userLoginState?.isLogin);
  }, []);

  return (
    <AuthContext.Provider value={{ login, setlogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
