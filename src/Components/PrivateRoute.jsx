import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import { useVideoManagement } from "../Contexts/VideoContextProvider";

export function PrivateRoute({ path, ...props }) {
  const { login } = useAuth();
  console.log({ login });
  console.log({ path });
  return login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
