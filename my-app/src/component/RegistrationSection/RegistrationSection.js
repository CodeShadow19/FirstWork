import React, { Component, Fragment } from 'react'
import { Container,Col,Row,Button,Form } from 'react-bootstrap'

export default class RegistrationSection extends Component {
    constructor(){
        super()
        this.state={
            file:null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange=(event)=>{
        const file=event.target.files[0];
        this.setState({
            file:file
        })
    }
    onRegister=()=>{
        let first_name=document.getElementById("first_name").value;
        let last_name=document.getElementById("last_name").value;
        let password=document.getElementById("password").value;
        let confirm_password=document.getElementById("confirm_password").value;
        let email=document.getElementById("email").value;
        let myFileName=this.state.file.name;

        alert("First Name: "+first_name+"\nLast Name: "+last_name+"\nPassword: "+password+"\nConfirm Password: "+confirm_password+"\nEmail: "+
        email+"\nImage Name: "+myFileName);
    }
    render() {
        return (
            <Fragment>
                <div className="middleContainer">
                    <Container className="registrationSection">
                        <Row className="topSection">
                            <Col sm={12} md={12} lg={12}>
                                <h3 className="title">Registration Here</h3><hr className="bg-light"/>
                                <p className="description">Register for create your account...</p>
                            </Col>
                        </Row>
                        <Row className="bottomSection">
                            <Col sm={12} md={12} lg={12}>
                                <Form>
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Control type="text" placeholder="First name" id="first_name"/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Last name" id="last_name"/>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Control type="password" placeholder="Password" id="password"/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="password" placeholder="Confirm Password" id="confirm_password"/>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Control type="email" placeholder="example@gmail.com" id="email"/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="file" id="image" onChange={this.handleChange}/>
                                        </Col>
                                    </Row>
                                    <Button variant="primary" onClick={this.onRegister}>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
