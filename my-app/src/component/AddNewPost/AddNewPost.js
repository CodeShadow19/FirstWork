import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import {Redirect} from "react-router-dom";

export default class AddNewPost extends Component {
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
    onCreate=()=>{
        let title=document.getElementById("title").value;
        let description=document.getElementById("description").value;
        let fileName=this.state.file.name;

        alert("Title: "+title+"\nDescription: "+description+"\nFile Name: "+fileName);
    }
    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/signInPage" />
        }else{
            return (
                <Fragment>
                    <div className="middleContainer">
                        <Container className="addNewSection">
                            <Row className="topSection">
                                <Col sm={12} md={12} lg={12}>
                                    <h3 className="titlw">Create New Forum</h3>
                                    <hr className="addNewHR" />
                                </Col>
                            </Row>
                            <Row className="bottomSection">
                                <Col className="formClass">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formTitle">
                                            <Form.Label>Forum Title</Form.Label>
                                            <Form.Control type="text" placeholder="Title..." id="title"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formDescription">
                                            <Form.Label>Forum Description</Form.Label>
                                            <Form.Control type="text" placeholder="Description..." id="description" />
                                        </Form.Group>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label>Upload Forum Image</Form.Label>
                                            <Form.Control id="image" type="file"  onChange={this.handleChange} />
                                        </Form.Group>
                                        <Button variant="primary" onClick={this.onCreate}>
                                            Create
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
}
