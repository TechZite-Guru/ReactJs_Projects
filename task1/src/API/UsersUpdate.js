import React, { Component } from 'react';
import axios from 'axios';

class UsersUpdate extends Component {

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

        axios.put('https://jsonplaceholder.typicode.com/users/1', this.state)
        .then(response => {
            console.log(response);
            this.setState({ updatedAt: response.data.updatedAt });
        });
    }

    render() {
        const {name, email, phone, website} = this.state
        return (
            <div id="divFormUpdate">
                <h2>Update User Details</h2>
                <form id="formS" onSubmit={this.submitHandler}>
                <div>
                    <label>New User Name: </label><br/>
                    <input 
                    type='text' 
                    name ='name' 
                        onChange={this.changeHandler}
                    value={name}></input><br/>
                </div>
                <div>
                    <label>New Email: </label><br/>
                    <input 
                    type='text' 
                    name ='email' 
                    onChange={this.changeHandler}
                    value={email}></input><br/>
                </div>
                <div>
                    <label>New Phone: </label><br/>
                    <input 
                    type='text' 
                    name ='phone' 
                    onChange={this.changeHandler}
                    value={phone}></input><br/>
                </div>
                <div>
                    <label>New Website: </label><br/>
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

export { UsersUpdate }