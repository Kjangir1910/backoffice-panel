import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path='/login' element ={<Login />} />
          <Route path="/todolist/*" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
