import React from "react";
import { Navigate } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function PrivateRouter({ children }) {
  const { login } = React.useContext(UserContext);
  return login ? children : <Navigate to="/login" />;
}
