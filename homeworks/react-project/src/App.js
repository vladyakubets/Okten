import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/comments">Comments</Link>
                        </li>

                    </ul>
                </nav>


                <Switch>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/comments" component={Comments}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
