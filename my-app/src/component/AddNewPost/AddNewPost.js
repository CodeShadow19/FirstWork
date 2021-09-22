import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import {Redirect} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class AddNewPost extends Component {
    constructor(){
        super()
        this.state={
            file:null,
            result:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange=(event)=>{
       // const file=event.target.files[0];
        this.setState({
            file:URL.createObjectURL(event.target.files[0])
        })
    }
    onCreate=()=>{
        //let fileName="";
        let userName=sessionStorage.getItem("userName");
        let title=document.getElementById("title").value;
        let description=document.getElementById("description").value;


        if(title===""){
            alert("Title Is Empty!");
        }else if(description===""){
            alert("Description Is Empty!");
        }else if(this.state.file===null){
            alert("Image Not Set Yet.");
        }else{
            /*fileName=this.state.file.name;
            alert("Title: "+title+"\nDescription: "+description+"\nFile Name: "+fileName);*/
            let jsonObject={
                title:title,
                description:description,
                userName:userName,
                file:this.state.file
            }
            RestClient.PostRequest(AppUrl.AddNewPost,JSON.stringify(jsonObject)).then(result=>{
                //console.log(result);
                this.setState({
                    result:result
                })
                if(this.state.result==1){
                    document.getElementById("submitBtn").innerHTML="Registration Success.";
                    setTimeout(function(){
                        document.getElementById("submitBtn").innerHTML="Submit";
                    },2000)
                    window.location.reload();
                }else if(this.state.result==0){
                    document.getElementById("submitBtn").innerHTML="Registration Failed!";
                    setTimeout(function(){
                        document.getElementById("submitBtn").innerHTML="Submit";
                    },2000)
                }else{
                    document.getElementById("submitBtn").innerHTML=this.state.result;
                    setTimeout(function(){
                        document.getElementById("submitBtn").innerHTML="Submit";
                    },2000)
                }
            }).catch(error=>{

            })
        }
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
                                        <Button variant="primary" onClick={this.onCreate} id="submitBtn">
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
