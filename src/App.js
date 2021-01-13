import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./components/List";
import Show from "../src/views/games/show";
import Navbar from "./components/Navbar";
import "./styles/base/base.css";
import "./styles/base/variables.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div className="App">
        <Navbar search={search} setSearch={setSearch} />
        <Switch>
          <Route exact path="/" render={() => <List search={search} />} />
          <Route exact path="/game/:id" component={() => <Show />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
