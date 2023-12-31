import axios from 'axios';
import React from 'react';

function TodoItem(props) {
    const styles = {
        span: {
            fontWeight: 'bold, underline'
        },
        buttonX: {
            borderRadius: "50px"
        }
    }

    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then(res => console.log(res.data))
    }

    return (
        <div>
            <div>
                <span style={styles.span}>
                    {props.todo.title} : 
                </span>
                {props.todo.description}
                <button onClick={() => deleteTodoHandler(props.todo.title)} style={styles.buttonX} className='btn btn-outline-danger my-2 mx-2'>X</button>
                <hr></hr>
            </div>
        </div>
    )
}

export default TodoItem

