import "./App.css";
import Navbar from "./components/Navbar";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./components/Home";
import Product from "./components/Product";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleGetConfiguration } from "./redux/configuration/configurationActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetConfiguration());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Router history={history}>
          <Navbar />
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
