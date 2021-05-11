import './App.css';
import Posts from "./components/posts/posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/users";

function App() {
    return (
        <div>
            {/*<Posts/>*/}
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/posts">Posts</Link>
                            </li>

                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/posts">
                            <Posts />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
