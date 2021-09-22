import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import {Link} from "react-router-dom";




export default class SignInForm extends Component {
    constructor(){
        super()
        this.state={
            data:""
        }
    }

   /* SendContact(){
       let email=document.getElementById("email").value;
        let name=document.getElementById("name").value;
        //alert(email+name);
        let jsonObject={email:email,name:name};

        RestClient.PostRequest(AppUrl.AddNewPost,JSON.stringify(jsonObject)).then(result=>{
            alert(result);
        }).catch(error=>{
            alert("Error");
        })
    }*/
    onLogin=()=>{
        let name=document.getElementById("name").value;
        let password=document.getElementById("password").value;
        let jsonObject={userName:name,password:password};

        RestClient.PostRequest(AppUrl.OnLogin,JSON.stringify(jsonObject)).then(result=>{
            this.setState({data:result});

            if(this.state.data=="1"){
                sessionStorage.setItem("userName",name);
                window.location.reload();
            }else{
                document.getElementById("submit").innerHTML="Wrong Password!";
                setTimeout(function(){
                    document.getElementById("submit").innerHTML="Submit";
                },2000)
            }
        }).catch(error=>{
            alert("Error...");
        })
        /*if(password=="codeshadow@2020"){
            sessionStorage.setItem("userName",name);
            window.location.reload();
        }else{
            document.getElementById("submit").innerHTML="Wrong Password!";
            setTimeout(function(){
                document.getElementById("submit").innerHTML="Submit";
            },2000)
        }*/
    }
    /*login=()=>{
        sessionStorage.setItem("userName","Hasan");
        window.location.reload();

    }
    logout=()=>{
        sessionStorage.clear();
        window.location.reload();
    }*/
    render() {
        return (
            <Fragment>
                <div className="middleContainer">
                    <Container className="signinFormSection">
                        <Row className="topSection">
                            <Col sm={12} md={12} lg={12}>
                                <h3 className="title">Sign In</h3><hr className="signINHR"/>
                                <p className="description">Sign in your account to post the forum</p>
                            </Col>
                        </Row>
                        <Row className="bottomSection">
                            <Col sm={12} md={12} lg={12}>
                                <Form>
                                    <Form.Control type="text" placeholder="Name" id="name" /><br/>
                                    <Form.Control type="password" placeholder="Password" id="password"/><br/>
                                    <Button variant="primary" onClick={this.onLogin} id="submit">
                                        Submit
                                    </Button>
                                </Form>
                                <div className="mt-3">
                                    <Link className="signinLinkClass" to="#">Forgot Your Password?</Link><br/>
                                    <Link className="signinLinkClass" to="/registration">Register as a new?</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
