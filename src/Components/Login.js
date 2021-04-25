import { useAuth } from "../Contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Login() {
  const { login, setlogin } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const buttonHandler = () => {
    setlogin((prev) => !prev);
    navigate(state?.from ? state.from : "/");
  };

  console.log({ state });

  return (
    <div>
      <p>{login ? "You're logged in" : "You need to login to go further"}</p>
      <input type="text" placeholder="username" />
      <br />
      <input type="password" placeholder="password" />
      <br />

      <button onClick={buttonHandler}>{login ? "Logout" : "Login"}</button>
    </div>
  );
}
