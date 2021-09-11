import React, { Component, Fragment } from 'react'
import { Col, Container, Row ,Button} from 'react-bootstrap'
import IMG from '../../assets/image/2.jpg'

export default class UserProfile extends Component {
    render() {
        return (
            <Fragment>
                <div className="middleContainer">
                    <Container className="userProfileSection">
                        <Row className="topSection">
                            <Col sm={12} md={12} lg={12}>
                                <h3 className="title">User Profile</h3><br/>
                                <Button variant="danger">Deactivate User</Button>
                            </Col>
                        </Row>
                        <Row className="bottomSectiom">
                            <Col sm={12} md={2} lg={4}>
                                <img  className="userImg" src={IMG}/>
                            </Col>
                            <Col sm={12} md={10} lg={8}>
                                <h3 className="name">Mr Demo</h3>
                                <p>Current Rating: 2</p>
                                <p>Email: mrdemo@gmail.com</p>
                                <p>Member Since: 11/11/2011 10:22 PM</p>
                                <p>Status: Active</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
