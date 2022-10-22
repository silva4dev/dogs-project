import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AppRoutes from "../routes/App/AppRoutes";
import { UserStorage } from "../contexts/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <AppRoutes />
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
