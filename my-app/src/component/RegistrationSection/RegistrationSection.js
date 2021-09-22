import React, { Component, Fragment } from 'react'
import { Container,Col,Row,Button,Form } from 'react-bootstrap'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class RegistrationSection extends Component {
    constructor(){
        super()
        this.state={
            file:null,
            result:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange=(event)=>{
       //const file=event.target.files[0];
        this.setState({
            file:URL.createObjectURL(event.target.files[0])
        })
    }
    /*onSearch(){
        let post_title=document.getElementById('searchData').value;
        let jsonObject={post_title:post_title};
        RestClient.PostRequest(AppUrl.searchPost,JSON.stringify(jsonObject)).then(result=>{
            this.setState({
                myData:result
            });
        }).catch(error=>{
            alert('Error');
        })
    }*/
    onRegister=()=>{
        let image="";
        let first_name=document.getElementById("first_name").value;
        let last_name=document.getElementById("last_name").value;
        let password=document.getElementById("password").value;
        let confirm_password=document.getElementById("confirm_password").value;
        let email=document.getElementById("email").value;
        //let token=document.getElementById("token").value;


        if(first_name===""){
            alert("First Name Is Empty...");
        }else if(last_name===""){
            alert("Last Name Is Empty...");
        }else if(password===""){
            alert("Password Is Empty...");
        }else if(confirm_password===""){
            alert("Confirm Password Is Empty...");
        }else if(email===""){
            alert("Email Is Empty...");
        }else if(this.state.file==null){
            alert("Image Not Set Yet");
        }else{
            let jsonObject={
                first_name:first_name,
                last_name:last_name,
                password:password,
                confirm_password:confirm_password,
                email:email,
                file:this.state.file
            };
            RestClient.PostRequest(AppUrl.OnRegister,JSON.stringify(jsonObject)).then(result=>{
                this.setState({
                    result:result
                });
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
                alert("Error...");
            })
        }
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
                                    <Button variant="primary" onClick={this.onRegister} id="submitBtn">
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
