import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cast from "./components/Cast/Cast";
import CastPersonDetails from "./components/CastPerson/CastPersonDetails";
import Inventory from "./components/Inventory/Inventory";
import InventoryItemDetails from "./components/InventoryDetails/InventoryItemDetails";

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
                        <Route exact={true} path={"/inventory/aboutItem:id"} render={({match:{params:{id}}})=>{
                            return <InventoryItemDetails itemId={id}/>
                        }}/>

                        <Route exact={true} path="/inventory" render={
                            ({match:{url}})=>{
                                return <Inventory url={url}/>
                            }
                        }/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
