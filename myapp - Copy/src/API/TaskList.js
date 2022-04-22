import React, { Component } from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import axios from 'axios';



class TaskList extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const url = 'https://api.conduiraonline.com/internshipcourses/getStudentWiseLeaderboardData';
    const formData = new FormData();
    formData.append('internshipId', 229882);
    formData.append('unitIds', "215565,218404,215566,225159,229865,229866");
    formData.append('batchId', 229883);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    axios.post(url, formData, config)//.then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        //response.sort((a,b) => a.crownsAchieved-b.crownsAchieved);
        response.data.sort((a,b) => {
            if (a.crownsAchieved < b.crownsAchieved) return 1;
            if (a.crownsAchieved > b.crownsAchieved) return -1;
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
                      <h2>Prowess Soft Leaderboard</h2>
                      <table table table-striped>
                            <thead className="text-primary">
                              <tr>
                                <th>ID</th>
                                <th>Student Name</th>
                                <th>Tasks Completed</th>
                                <th>Goals Completed</th>
                                <th>LP Acheived</th>
                                <th>Crowns Achieved</th>
                              </tr>
                              {
                                this.state.data.map(item => {
                                  return (
                                    
                                      <tr>
                                        <td> {item.studentId} </td>
                                        <td> {item.studentName} </td>
                                        <td> {item.tasksCompleted} </td>
                                        <td> {item.goalsCompleted} </td>
                                        <td> {item.lpAchieved} </td>
                                        <td> {item.crownsAchieved} </td>
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

export {TaskList}