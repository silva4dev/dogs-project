import React from "react";
import Feed from "../User/Feed/Feed";
import Head from "../../helpers/Head/Head";

export default function Home() {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
}
