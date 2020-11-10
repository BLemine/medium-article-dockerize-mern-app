import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Favoris from "./favoris";

function App() {
  return (
    <Router>
      <div>
          <span style={{marginRight:20}}>
            <Link to="/">Home</Link>
          </span>
          <span style={{marginRight:20}}>
            <Link to="/favoris">Favoris</Link>
          </span>
          <span style={{marginRight:20}}>
            <Link to="/login">Login</Link>
          </span>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favoris">
            <Favoris />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
