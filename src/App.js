import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Customers from "./Customers";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
