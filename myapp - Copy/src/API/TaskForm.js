import React, { Component } from 'react';
import axios from 'axios';

class TaskForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            studentId:'',
            taskId:'',
            goalId:'',
            context:'',
            status:'',
            result:'',
            resultValue:''
        }
    }

    changeHandler=(e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.put('https://api.conduiraonline.com/student/postActivity/0', this.state)
        .then(response => {
            console.log(response)
        })
    }

    render() {
        const {studentId, taskId, goalId, context, status, result, resultValue} = this.state
        return (
            <div id="divForm">
                <h2>Auto Complete Task</h2>
                <form id="formS" onSubmit={this.submitHandler}>
                <div>
                    <label>Student ID: </label><br/>
                    <input 
                    type='text' 
                    name ='studentId' 
                    onChange={this.changeHandler}
                    value={studentId}></input><br/>
                </div>
                <div>
                    <label>Task Id: </label><br/>
                    <input 
                    type='text' 
                    name ='taskId' 
                        onChange={this.changeHandler}
                    value={taskId}></input><br/>
                </div>
                <div>
                    <label>Goal Id: </label><br/>
                    <input 
                    type='text' 
                    name ='goalId' 
                    onChange={this.changeHandler}
                    value={goalId}></input><br/>
                </div>
                <div>
                    <label>Context: </label><br/>
                    <input 
                    type='text' 
                    name ='context' 
                    onChange={this.changeHandler}
                    value={context}></input><br/>
                </div>
                <div>
                    <label>Status: </label><br/>
                    <input 
                    type='text' 
                    name ='status' 
                    onChange={this.changeHandler}
                    value={status}></input><br/>
                </div>
                <div>
                    <label>Result: </label><br/>
                    <input 
                    type='text' 
                    name ='result' 
                    onChange={this.changeHandler}
                    value={result}></input><br/>
                </div>
                <div>
                    <label>Result Value: </label><br/>
                    <input 
                    type='text' 
                    name ='resultValue' 
                    onChange={this.changeHandler}
                    value={resultValue}></input><br/>
                </div><br/>
                <button id="submitBtn" type='submit'>Submit Now</button>
                </form>
            </div>
        )
    }

}

export { TaskForm }