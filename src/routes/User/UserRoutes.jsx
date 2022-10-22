import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/User/Header/Header";
import { UserContext } from "../../contexts/UserContext";
import Head from "../../helpers/Head/Head";
import NotFound from "../../pages/NotFound/NotFound";
import Feed from "../../pages/User/Feed/Feed";
import PhotoPost from "../../pages/User/PhotoPost/PhotoPost";
import Stats from "../../pages/User/Stats/Stats";

export default function UserRoutes() {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha Conta" />
      <Header />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<PhotoPost />} />
        <Route path="/estatisticas" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
