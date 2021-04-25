import { useAuth } from "../Contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Login() {
  const { login, loginWithCredentials, setlogin } = useAuth();
  const [loginEntries, setLoginEntries] = useState({
    userName: "",
    password: "",
  });
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginChangeHandler = (event) => {
    setLoginEntries({
      ...loginEntries,
      [event.target.name]: event.target.value,
    });
  };

  const loginButtonHandler = async () => {
    try {
      const { userName, password } = loginEntries;
      const serverResponse = await axios.post(
        `http://127.0.0.1:3010/users/${userName}`,
        {
          name: userName,
          password: password,
        }
      );

      console.log({ serverResponse });
      setlogin(serverResponse?.data?.login);
      localStorage.setItem(
        "login",
        JSON.stringify({ isLogin: serverResponse?.data?.login })
      );
    } catch (error) {
      console.error(error);
    }
    // loginWithCredentials(loginEntries.userName, loginEntries.password);
    navigate(state?.from ? state.from : "/");
  };

  const logoutButtonHandler = () => {
    setlogin(false);
    localStorage.removeItem("login");
    navigate("/");
  };

  console.log({ state });

  return (
    <div>
      <p>{login ? "You're logged in" : "You need to login to go further"}</p>
      <input
        type="text"
        placeholder="username"
        name="userName"
        onChange={loginChangeHandler}
      />
      <br />

      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={loginChangeHandler}
      />
      <br />

      {login ? (
        <button onClick={logoutButtonHandler}>Logout</button>
      ) : (
        <button onClick={loginButtonHandler}>Login</button>
      )}
      {JSON.stringify(loginEntries)}
    </div>
  );
}
