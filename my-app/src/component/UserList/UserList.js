import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Button,Form,Table } from 'react-bootstrap'
import IMG from '../../assets/image/2.jpg'
import {Link, Redirect} from "react-router-dom";

export default class UserList extends Component {
    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/signInPage" />
        }else{
            return (
                <Fragment>
                    <div className="middleSection">
                        <Container className="userProfileSection">
                            <Row className="topSection">
                                <Col sm={12} md={12} lg={12}>
                                    <h3 className="title">Browse Users</h3><br/>
                                </Col>
                            </Row>
                            <Row className="bottomSectiom">
                                <Col sm={12} md={12} lg={12}>
                                    <Table striped bordered hover>
                                        <thead>
                                        <tr>
                                            <th>Profile Pic</th>
                                            <th>Username</th>
                                            <th>Member Since</th>
                                            <th>Email</th>
                                            <th>User Rating</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><Link to="/singleUser"><img className="userImg" src={IMG} /></Link></td>
                                            <td>Active</td>
                                            <td>11/11/2011 10:26 PM</td>
                                            <td>mrdemo@gmail.com</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/singleUser"><img className="userImg" src={IMG} /></Link></td>
                                            <td>Active</td>
                                            <td>11/11/2011 10:26 PM</td>
                                            <td>mrdemo@gmail.com</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/singleUser"><img className="userImg" src={IMG} /></Link></td>
                                            <td>Active</td>
                                            <td>11/11/2011 10:26 PM</td>
                                            <td>mrdemo@gmail.com</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/singleUser"><img className="userImg" src={IMG} /></Link></td>
                                            <td>Active</td>
                                            <td>11/11/2011 10:26 PM</td>
                                            <td>mrdemo@gmail.com</td>
                                            <td>22</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fragment>
            )
        }
    }
}
