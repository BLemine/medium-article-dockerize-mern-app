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
import Movie from "./movie"
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          
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
            <Route path="/movie">
              <Movie />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
