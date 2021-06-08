import React,{useReducer} from 'react';
import ToDoList from './ToDoList'

const todosInitialState = {
  todos:[{ id:'1', text: "finishing writing hooks chapter"},
{id:'2', text:"play with kids"},
{id:'3', text: "read bible"}]
};

export const TodosContext = React.createContext()

export default function App(){
const [state,dispatch] = useReducer(todosReducer, todosInitialState)

return(
  <TodosContext.Provider value = {{state,dispatch}}>
    <ToDoList/>
  </TodosContext.Provider>
)
}



function todosReducer(state, action){
  switch(action.type){
default: 
     return todosInitialState
  }
}