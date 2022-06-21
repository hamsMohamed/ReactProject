import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movie from './movie/movie';
import Home from './home/home';
import MovieDetails from "./movie/moviedetails";
function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movie} />
          <Route path="/details/:id" component={MovieDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
