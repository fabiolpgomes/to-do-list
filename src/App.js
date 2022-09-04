import React, { useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';



const App = () => {
 const [tasks, setTasks] = useState([
  {
    id: '1',
    title: 'Estudar React',
    completed: false,
  },
  {
    id:'2',
    title:'Estudar lógica de programacao',
    completed: true,
  },
  {
    id:'3',
    title:'Criar projeto React-treinar',
    completed: false,
  },
  {
    id:'4',
    title:'Atualizar CV',
    completed: false,
  },{
    id:'5',
    title:'Atualizar LinkedId',
    completed: false,
  }
 ]) ;
 
 const handleTaskAddition = (tasktitle)  => {
 const newTasks = [...tasks, {
        title: tasktitle,
        id: uuidv4(),
        completed: false,
 }] 

  setTasks(newTasks)
 }

  return (
    <>
        <div className="container">
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks}/>
        </div>
    </>
  );
};

export default App;
