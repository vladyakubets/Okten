import {useDispatch, useSelector} from "react-redux";


export default function Counter() {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={()=>{
                dispatch({type: 'INC'})
            }}>INC</button>
            <button onClick={()=>{
                dispatch({type: 'INC100'})
            }}>INC100</button>
            <button onClick={()=>{
                dispatch({type: 'DEC'})
            }}>DEC</button>
            <button onClick={()=>{
                dispatch({type: 'DEC100'})
            }}>DEC100</button>
            <button onClick={()=>{
                dispatch({type: 'RESET'})
            }}>RESET</button>


        </div>
    )
}