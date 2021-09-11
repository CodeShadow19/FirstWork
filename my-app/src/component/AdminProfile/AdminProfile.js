import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Button,Form } from 'react-bootstrap'
import IMG from '../../assets/image/2.jpg'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import {Redirect} from "react-router-dom";
//import '../../assets/js/custom'

export default class AdminProfile extends Component {
   constructor(){
       super()
       this.state={
           selectedFile:IMG
       }
       this.handleChange = this.handleChange.bind(this)
   }
    handleChange(event) {
        this.setState({
            selectedFile: URL.createObjectURL(event.target.files[0])
        })
    }
    /*handleChange = (event) => {
        const file = event.target.files[0];
        let myFileName=file.name;
        let myFileSize=file.size;
        let myFileFormat=myFileName.split('.').pop();
        alert(myFileName+"+"+myFileSize+"+"+myFileFormat);
    }*/


    uploadHandler=()=>{
       //console.log(this.state.selectedFile);
        let jsonObject={myFile:this.state.selectedFile};
        RestClient.PostRequest(AppUrl.Test,JSON.stringify(jsonObject)).then(result=>{
            alert(result);
        })
    }
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
                                    <h3 className="title">Admin Profile</h3><br/>
                                </Col>
                            </Row>
                            <Row className="bottomSectiom">
                                <Col sm={12} md={2} lg={4}>
                                    <img  id="imgReview" className="userImg" src={this.state.selectedFile}/>
                                    <Form>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <input type="file" onChange={this.handleChange}/>
                                        </Form.Group>
                                        <Button variant="primary" >
                                            Submit
                                        </Button>
                                    </Form>

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
}
