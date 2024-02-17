import {useState} from 'react';

function Todolist(){
    const [tasks,setTasks] = useState([""]);
    const [newTask,setNewTask] = useState("");
    function handleChangeTask(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...t,newTask]);
            setNewTask("");
        } 
    }
    function removeTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index);
        setTasks(updatedTask);
    }
    function moveUpTask(index){
        if(index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]] =
        [updatedTask[index-1],updatedTask[index]];
        setTasks(updatedTask);
        }
    }
    
    function moveDownTask(index){
        if(index < tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] =
            [updatedTask[index+1],updatedTask[index]];
            setTasks( updatedTask);
            }
    
    }
    return (
        <div className='main-container'>
            <h1>To Do List</h1>
            <input type="text"
                placeholder='Add the task'
                value = {newTask}
                onChange={handleChangeTask}
            />

            <button onClick={addTask} 
                    className='add-button'>
                    Add</button>
            <ol>
                {tasks.map((task,index) => <li key={index}>
                    <span className='task-name'>{task}</span>
                    <button className='delete-button' 
                            onClick={()=>removeTask(index)}>
                            Delete</button>
                    <button className='up-button' 
                            onClick={()=>moveUpTask(index)}>
                            👆</button>
                    <button className='down-button' 
                            onClick={()=>moveDownTask(index)}>
                            👇</button>
                </li>)}
            </ol>

            <footer>©️ Nishant Maithil {new Date().getFullYear()}</footer>
        </div>
        
    );
}
export default Todolist