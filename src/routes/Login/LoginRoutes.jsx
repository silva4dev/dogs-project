import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PasswordLost from "../../pages/PasswordLost/PasswordLost";
import PasswordReset from "../../pages/PasswordReset/PasswordReset";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Login.module.css";
import NotFound from "../../pages/NotFound/NotFound";

export default function LoginRoutes() {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/criar" element={<Register />} />
          <Route path="/perdeu" element={<PasswordLost />} />
          <Route path="/resetar" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
