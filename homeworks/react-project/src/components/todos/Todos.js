import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_TODO, SET_TODO} from "../../redux";
import './toDoItem.style.css'

export default function Todos() {
    let [inputValue, setInputValue] = useState({});
    let [idValue, setIdValue] = useState(0);
    const todos = useSelector(({todos}) => todos);
    console.log(todos);

    const dispatch = useDispatch();

    function addTodo() {
        setIdValue(++idValue);
        dispatch({
            type: SET_TODO, payload: {
                id: idValue,
                description: inputValue
            }
        })
    }

    const xx = ({target: {value}}) => {
        setInputValue(value)
    }

    return (
        <div>
            <div><input type="text" name={"todoDesc"} onChange={xx}/>
                <button onClick={() => addTodo()}>ADD</button>
                <span>CLICK ON ITEM BELOW TO DELETE</span>
            </div>
            <div>
                {
                    todos && todos.map(todo =>
                        (<div key={todo.id} className={'toDoItem'} onClick={() => {
                            console.log("clicked")
                            dispatch({type: DELETE_TODO, payload: todo.id});
                        }
                        }>Description: {todo.description}</div>)
                    )
                }
            </div>
        </div>
    )
}