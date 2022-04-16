import React, { Component } from 'react';
import axios from 'axios';

class UsersForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
            phone:'',
            website:''
        }
    }

    changeHandler=(e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', this.state)
        .then(response => {
            console.log(response)
        })
    }

    render() {
        const {id, name, email, phone, website} = this.state
        return (
            <div id="divForm">
                <h2>Add New User</h2>
                <form id="formS" onSubmit={this.submitHandler}>
                <div>
                    <label>User Name: </label><br/>
                    <input 
                    type='text' 
                    name ='name' 
                        onChange={this.changeHandler}
                    value={name}></input><br/>
                </div>
                <div>
                    <label>Email: </label><br/>
                    <input 
                    type='text' 
                    name ='email' 
                    onChange={this.changeHandler}
                    value={email}></input><br/>
                </div>
                <div>
                    <label>Phone: </label><br/>
                    <input 
                    type='text' 
                    name ='phone' 
                    onChange={this.changeHandler}
                    value={phone}></input><br/>
                </div>
                <div>
                    <label>Website: </label><br/>
                    <input 
                    type='text' 
                    name ='website' 
                    onChange={this.changeHandler}
                    value={website}></input><br/>
                </div>
                <br/>
                <button class="submitBtn" type='submit'>Submit Now</button>
                </form>
            </div>
        )
    }

}

export { UsersForm }