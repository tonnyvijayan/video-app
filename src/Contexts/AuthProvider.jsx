import { useState, createContext, useContext, useEffect } from "react";
import { useVideoManagement } from "./VideoContextProvider";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setlogin] = useState(false);
  const { serverOperations } = useVideoManagement();

  useEffect(() => {
    const userLoginState = JSON.parse(localStorage.getItem("login"));
    console.log({ userLoginState });
    serverOperations({
      type: "UPDATE-CURRENT-USER-DATA",
      payload: userLoginState?.currentUserId,
    });
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
