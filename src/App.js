import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

import './App.css';



const App = () => {
 const [tasks, setTasks] = useState([
  {
    id: '1',
    title: 'Study React',
    completed: false,
  },
  {
    id:'2',
    title:'Study programming logic',
    completed: true,
  },
  {
    id:'3',
    title:'Create React-train project',
    completed: false,
  },
  {
    id:'4',
    title:'Update CV',
    completed: false,
  },{
    id:'5',
    title:'Update LinkedIn',
    completed: false,
  }
 ]);

    useEffect(() => {
 // console.log("task mudou");
    const fetchTasks = async () => { 
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
        );
           // console.log(data);
           setTasks(data);
  };
      fetchTasks();
},[]);

 const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
    
      return task;
    });

    setTasks(newTasks)
 };
 
 const handleTaskAddition = (taskTitle)  => {
    const newTasks = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
    },
  ];
    
  setTasks(newTasks);

  };

  const handleTaskDeletion = (taskId)  => {
    const newTasks = tasks.filter(task => task.id !== taskId)  
    
    setTasks(newTasks)  
  }

  return (
    <Router>
      <div className="container">
          <Header />
          <Route path="/" 
          exact 
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                    tasks={tasks} 
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
              />
            </>

          )}
       />
        <Route path="/:tasktTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};


export default App;
