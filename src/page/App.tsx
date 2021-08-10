import React, { useState } from "react";
import MainRoutes from "../utils/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Aside, Header } from "../components";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <Router>
      <Header menu={setToggle} toggle={toggle} />

      <main className="main-container">
        <div className="container">
          <MainRoutes />
        </div>
        <Aside toggle={toggle} />
      </main>
    </Router>
  );
}

export default App;
