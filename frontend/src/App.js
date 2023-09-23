import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoView from './components/TodoListView';

import "bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const styles = {
    mainDiv: {
      textAlign: "center",
      fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
      width: "400px",
      backgroundColor: "white",
      marginTop: "15px"
    },
    mainHeader: {
      color: "white"
    }
  }

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Read All of the Todos. Sends get request to API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  }, []);

  // Post a Todo
  const addTodoHandler = () => {
    axios.post('http://127.0.0.1:8000/api/todo/', {
      'title': title,
      'description': desc
    })
    .then(res => console.log(res))
  };

  return (
    <div style={styles.mainDiv} className="App list-group-item justify-content-center align-items-center mx-auto">
      <h1 style={styles.mainHeader} className="card text-white bg-primary mb-1">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FastAPI - ReactJS - MongoDB</h6>
      <div className="card-body">
        <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>

        <span className='card-text'>
          <input className='mb-2 form-control titleIn' onChange={event => setTitle(event.target.value)} placeholder='Title' />
          <input className='mb-2 form-control desIn' onChange={event => setDesc(event.target.value)} placeholder='Description' />
          <button id='subButton' className='btn btn-outline-primary mx-2 mb-2' onClick={addTodoHandler}>Add task</button>
        </span>

        <h5 className='card text-white bg-dark mb-3'>Your tasks</h5>

        <div>
          <TodoView todoList={todoList} />
        </div>

        <h6 className='card text-dark bg-warning py-1 mb-0'>
          Copyright 2023, All rights reserved &copy;
        </h6>

      </div>
    </div>
  );
}

export default App;
