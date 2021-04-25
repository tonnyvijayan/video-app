import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";

export function PrivateRoute({ path, ...props }) {
  const { login } = useAuth();
  console.log({ path });
  return login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
