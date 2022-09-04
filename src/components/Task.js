import React from 'react';
import './Task.css'

const Task = ({ tasks }) => {

    return <div className='task-container'>{tasks.title}

    </div>;
};
 
export default Task;