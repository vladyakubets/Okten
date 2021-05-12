import './App.css';
import Posts from "./components/posts/posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/users";
import UserDetails from "./components/users/user/UserDetails";
import PostDetails from "./components/posts/post/PostDetails";


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
                        <Route exact={true} path={'/posts'} render={(props) => <Posts {...props}/>}/>
                        <Route exact={true} path={'/posts/:id'} render={(props)=> {
                            let {match:{params:{id}}}=props;
                            return <PostDetails postId={id}/>

                        }}/>

                        <Route exact={true} path={'/users'} render={(props) => <Users {...props}/>}/>
                        <Route exact={true} path={'/users/:id'} render={(props)=> {
                            let {match:{params:{id}}}=props;
                            return <UserDetails userId={id}/>

                        }}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
