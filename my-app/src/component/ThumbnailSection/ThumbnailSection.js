import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form ,Button,InputGroup,FormControl} from 'react-bootstrap'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import App from "../../App";
import {Link} from "react-router-dom";

export default class ThumbnailSection extends Component {
    constructor(){
        super()
        this.state={
            home_title:"...",
            home_description:"...",
            myData:[],
            searchTerm:"",
            setSearchTerm:""
        }
    }
    /*componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTop).then(result=>{
            if(result==null){
                console.log("Errorr...");
            }else{
                this.setState({
                    home_title:result[0]['title'],
                    home_description:result[0]['description']
                })
            }
        })
        RestClient.GetRequest(AppUrl.HomePostData).then(result=>{
            if(result==null){
                alert("Data Is Empty!");
            }else{
                this.setState({myData:result})
            }
        })
    }
    onSearch(){
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
    render() {

        return (
            <Fragment>
                <div className="thumbnailSection middleContainer">
                    <Container className="thumbnailContainer">
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <h1 className="title">Learn,Collabarate,Share Knowldge</h1>
                                <h4 className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h4>
                                <Form className="formSection" >
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Search..."
                                            aria-label="Search..."
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="outline-secondary" id="button-addon2">
                                            Button
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
