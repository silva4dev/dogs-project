import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import styles from "./Header.module.css";
import { useLocation } from "react-router";

export default function Header() {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar": {
        setTitle("Poste sua Foto");
        break;
      }
      case "/conta/estatisticas": {
        setTitle("Estatísticas");
        break;
      }
      default: {
        setTitle("Minha Conta");
      }
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <HeaderNav />
    </header>
  );
}
