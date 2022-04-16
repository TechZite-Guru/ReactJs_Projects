import React, { Component } from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from 'reactstrap';
import axios from 'axios';
import { detectOverflow } from '@popperjs/core';



class UsersList extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    axios.get(url)
      .then((response) => {
        console.log(response.data);
        response.data.sort((a,b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
         });
        this.setState({
          data: response.data
        });
    });
  }




  render() {

    return (
      
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                      <h2>Users Data</h2>
                      <table table table-striped>
                            <thead className="text-primary">
                              <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                              </tr>
                              {
                                this.state.data.map(item => {
                                  return (
                                    
                                      <tr>
                                        <td> {item.id} </td>
                                        <td> {item.name} </td>
                                        <td> {item.email} </td>
                                        <td> {item.phone} </td>
                                        <td> {item.website} </td>
                                      </tr>
                                    
                                  )
                                })
                              }

                            </thead>
                          </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      
    );
  }
}

export { UsersList }