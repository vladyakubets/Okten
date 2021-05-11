import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cast from "./components/Cast/Cast";
import CastPersonDetails from "./components/CastPerson/CastPersonDetails";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/cast">Cast</Link>
                            </li>
                            <li>
                                <Link to="/inventory">Inventory</Link>
                            </li>

                        </ul>
                    </nav>
                    <Switch>
                        <Route exact={true} path="/cast" render={
                            ({match:{url}})=>{
                                return <Cast url={url}/>
                            }
                        }/>
                        <Route exact={true} path={"/cast/aboutPerson:id"} render={({match:{params:{id}}})=>{
                            return <CastPersonDetails personId={id}/>
                        }}/>

                        <Route exact={true} path="/inventory"/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
