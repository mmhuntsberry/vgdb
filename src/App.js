import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./components/List";
import Show from "../src/views/games/show";
import "./styles/base/base.css";
import "./styles/base/variables.css";
// import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/game/:id" component={() => <Show />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
