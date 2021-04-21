import "./App.css";
import Dashboard from "./components/Dashboard";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./components/Home";
import Product from "./components/Product";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Router history={history}>
          <Dashboard />
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/product" render={() => <Product />} />
            <Route path="*" render={() => <div>Status 404: Not Found</div>} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
