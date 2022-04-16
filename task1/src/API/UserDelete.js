import React, { Component } from 'react';
import axios from 'axios';

class UserDelete extends Component {

    

    deleteContact () {
        axios.delete('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
            console.log(response.data);
        })
    }

    render() {

        //const {users} = this.state
    
        return (<div class="delLayout">
                      <button class="submitBtn1" onClick={this.deleteContact} >Remove</button>
            </div>);
    }

}

export { UserDelete }