import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./users/Users";
import UserDetails from "./users/user/userDetails/UserDetails";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" render={(props)=> {
              return <Users />
            }}/>
              <Route path="/user/:id" render={(props)=> {
              return <UserDetails {...props} />
            }}/>


          </Switch>
        </div>
      </Router>
  );
}

export default App;
