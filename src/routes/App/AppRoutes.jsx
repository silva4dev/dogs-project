import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LoginRoutes from "../Login/LoginRoutes";
import UserRoutes from "../User/UserRoutes";
import PrivateRouter from "../../helpers/PrivateRouter";
import Photo from "../../pages/Photo/Photo";
import Profile from "../../pages/User/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<LoginRoutes />} />
      <Route
        path="conta/*"
        element={
          <PrivateRouter>
            <UserRoutes />
          </PrivateRouter>
        }
      />
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
