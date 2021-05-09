import "./Login.css";
import { useAuth } from "../Contexts/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useVideoManagement } from "../Contexts/VideoContextProvider";

export function Login() {
  const { login, loginWithCredentials, setlogin } = useAuth();
  const { dispatch } = useVideoManagement();
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
      console.log({ userName });
      console.log({ password });
      console.log("enteredLoginbuttonHandler");

      const serverResponse = await axios.post(
        `https://stark-wave-55031.herokuapp.com/users/auth`,
        {
          name: userName,
          password: password,
        }
      );
      dispatch({
        type: "UPDATING-USER-DETAILS-FROM-SERVER",
        payload: serverResponse.data.requestedUser,
      });

      console.log({ serverResponse });
      setlogin(serverResponse?.data?.login);
      localStorage.setItem(
        "login",
        JSON.stringify({
          isLogin: serverResponse?.data?.login,
          currentUserId: serverResponse?.data?.requestedUser?._id,
        })
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
    dispatch({
      type: "CLEAR-USER-DATA",
    });
    navigate("/");
  };

  console.log({ state });

  return (
    <div class="login-form">
      <div class="login-container">
        <div class="login-content">
          <h2>log In</h2>
          <div class="form-div">
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={loginChangeHandler}
              className="wd-100"
            />
            <input
              type="password"
              placeholder="User Password"
              name="password"
              onChange={loginChangeHandler}
              className="wd-100"
            />

            {login ? (
              <button onClick={logoutButtonHandler} class="btn">
                Logout
              </button>
            ) : (
              <button onClick={loginButtonHandler} class="btn">
                Login
              </button>
            )}
          </div>
          <p class="account">
            Dont have an account?<Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
