import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';
import Users from "./components/Users";
import TaskList from './components/TaskList';
import  Tasks  from './components/Tasks';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path='/login' element ={<Login />} />
          <Route path="/todolist/*" element={<TodoList />} />
           <Route path='/users' element={<Users/>}/>
          <Route path='/task-list' element={<TaskList/>}/>
          <Route path='tasks' element={<Tasks/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
