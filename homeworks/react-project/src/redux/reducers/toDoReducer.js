import {DELETE_TODO, SET_TODO} from "../actionTypes";

const initialState={
    todos:[]
}

export const toDoReducer = (state = initialState, action)=>{
 switch (action.type){
     case SET_TODO:{
         // state.todos.push(action.payload);
         return {todos: [...state.todos, action.payload]

         }
     }
     case DELETE_TODO:{
         console.log("UNTIL",state.todos);
         const filtered = state.todos.filter((value) => value.id !== action.payload);
         console.log("AFTER",filtered);

        return{
            todos: [...filtered]
        }
     }
     default:
         return state;
 }
}