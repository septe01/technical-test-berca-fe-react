import React from "react";
import MainRoutes from "../utils/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components";

function App() {
  return (
    <Router>
      <Header />

      <main className="main-container">
        <div className="container">
          <MainRoutes />
        </div>
      </main>
    </Router>
  );
}

export default App;
