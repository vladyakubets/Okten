import reducer from "./Reducer/Reducer";
import {createStore} from "redux";


let store = createStore(reducer);

export default store;