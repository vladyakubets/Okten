import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [check, setCheck] = useState(null);

    return (
        <div>
            <h3>{todo.map(value=><div><p>TEXT: {value.text}</p>Status:{value.status} <hr/></div>)}</h3>

            <input type="text" value={value} onChange={({target: {value}}) => setValue(value)}/>
            <hr/>
            <input type="radio" name='status' value={true} onChange={({target: {value}}) => setCheck(value)}/>
            <input type="radio" name='status' value={false} onChange={({target: {value}}) => setCheck(value)}/>
            <button onClick={() => {
                dispatch({type: "ADD", payload: {text:value,status:check}});
            }}>ADD TASK

            </button>

        </div>
    );
}

export default App;
