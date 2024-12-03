import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
 const [todo, setTodo] = useState("")
 const [todos, setTodos] = useState([])
  
      
       const edit = ()=>{

         }
       const delet = ()=>{

       }
       const add = ()=>{
        setTodos([...todos,{todo ,isCompleted: false}])
        setTodo("")
        console.log(todos)
       }
       const change = (e)=>{
            setTodo(e.target.value)
       }

  //  function enddddddddd
  return (
    <>
      <div className="con">
        <Navbar />
        <div className="todo-con">
          <div className="todo"> 

            <div className="todo-head">
              <h1>Add Task</h1>
              <div className="inp">
                <input  onChange={change} value={todo} type="text" name="" id="" />
                <button onClick={add}>Add</button>
              </div>
            </div>
            
            <div className="tobo-body">
              <ul>
               {todos.map(item=>{

             
               return <li key={todo} >{item.todo};<div className="btn"><button onClick={edit}>EDIT</button> <button onClick={delet}>DELETE</button></div></li>
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
