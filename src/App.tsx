import React, {useEffect, useState} from 'react';
import './App.css';
type TaskType = {
    userId:number
    id: number
    title: string
    completed: boolean}


function App() {
    const [tasks, setTasks]= useState<TaskType[]>([])

    /*useEffect( ()=> {

       /!* fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTasks(json);
            });},[])*!/*/
    const ShowTasksHandler =()=> {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTasks(json))
    }
    return (
        <div className='App'>
            <button onClick={ShowTasksHandler}>Show Tasks</button>
            <ol>
                {tasks.map(el=> {
                    return (
                        <li key={el.id}>
    <span>{el.id}</span>
    <span>{el.userId}</span>
    <span>{el.title}</span>
    <input type="checkbox"  checked={el.completed}/>
</li>        )    })}
            </ol>
        </div>  )}
export default App;