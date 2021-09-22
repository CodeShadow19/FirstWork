import React, { Component, Fragment } from 'react'
import {Button, Col, Row, Container, Form} from 'react-bootstrap'
import Admin from '../../assets/image/2.jpg'
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class SinglePost extends Component {
    constructor(props){
        super()
        this.state={
            id:props.id,
            replyCommentBox:"replyCommentBox d-none",
            title:props.title,
            admin:"...",
            date:"...",
            description:"...",
            next_id:"",
            next_title:"",
            prev_id:"",
            prev_title:"",
            next:"0",
            prev:"0"
        }
        this.reply = this.reply.bind(this);
    }
    reply=(event)=>{
        this.setState({
            replyCommentBox:"replyCommentBox d-block"
        })
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.SinglePageData+this.state.id).then(result=>{

            this.setState({
                admin:result[0]['admin_name'],
                date:result[0]['date_time'],
                description:result[0]['post_description']
            })
        })
        RestClient.GetRequest(AppUrl.NextPrev+this.state.id).then(result=>{
           console.log(result);
            if(result['next']==null){
                this.setState({
                    prev_id:result['prev']['id'],
                    prev_title:result['prev']['post_title'],
                    prev:"1"
                })
            }else if(result['prev']==null){
                this.setState({
                    next_id:result['next']['id'],
                    next_title:result['next']['post_title'],
                    next:"1"
                })
            }else{
                this.setState({
                    next_id:result['next']['id'],
                    next_title:result['next']['post_title'],
                    prev_id:result['prev']['id'],
                    prev_title:result['prev']['post_title'],
                    next:"1",
                    prev:"1"
                })
            }

        }).catch(error=>{
            //alert("Error...");
        })


    }

    render() {
        const next_post=()=>{
            if(this.state.next=="1"){
                return <a href={"/singlePage/"+this.state.next_id+"/"+this.state.next_title}>Next Post</a>;
            }else if(this.state.next=="0"){
                return "";
            }else{
                return "...";
            }
        }
        const prev_post=()=>{
            if(this.state.prev=="1"){
                return <a href={"/singlePage/"+this.state.prev_id+"/"+this.state.prev_title}>Previous Post</a>;
            }else{
                return " ";
            }

        }
        return (
            <Fragment>
                <div className="singlePostPage">
                    <Container>
                        <Container className="postDetails">
                            <Row className="titleSection singlePageRow">
                                <Col sm={12} md={6} lg={4} className="adminDetails">
                                    <div className="adminCard">
                                        <img className="img" src={Admin}/>
                                        <p className="name">{this.state.admin}(22)</p>
                                        <p className="info">{this.state.date} Admin</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={8} className="postTitle">
                                    <h2 className="title">{this.state.title}</h2>
                                </Col>
                            </Row><hr className="bg-dark m-0"/>
                            <Row className="singlePageRow">
                                <Col sm={12} md={12} lg={12} className="descriptionPost">
                                    <div className="description">
                                        <p className="postDescription">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but also the leap into electronic typesetting,
                                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                    <Row className="nextPost">
                                        <Col sm={6} md={6} lg={6} className="text-left">
                                            {prev_post()}
                                        </Col>
                                        <Col sm={6} md={6} lg={6} className="text-right">
                                            {next_post()}
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            <Row className="commentBox singlePageRow">
                                <Col sm={12} md={12} lg={12} className="commentBoxCol">
                                    <Form>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            className="textArea"
                                        />
                                        <Button variant="outline-secondary" className="submitBtn">
                                            Post
                                        </Button>
                                    </Form>
                                </Col>

                            </Row>
                            <Row className="commentRow singlePageRow">
                                <h3 className="moreComment">5 more comments...</h3>
                                <Col sm={12} md={12} lg={12}>
                                    <Row className="commentCard">
                                        <Row className="parentComment">
                                            <Col sm={2} md={3} lg={3} className="authorBio">
                                                <img className="img" src={Admin}/>
                                                <p className="name">Mr Demo(22)</p>
                                                <p className="info">11/11/2011  10:23 PM</p>
                                            </Col>
                                            <Col sm={10} md={9} lg={9} className="commentDescription">
                                                <p className="commentDescription">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s with the release.
                                                </p>
                                            </Col>
                                            <li>
                                                <Button variant="outline-danger" className="likeBtn btn">Like</Button>
                                                <Button variant="outline-success" className="replyBtn btn">Reply</Button>
                                            </li>
                                            <hr className="bg-dark parentHR"/>
                                            <Row className="childComment">
                                                <Col sm={2} md={3} lg={3} className="authorBio">
                                                    <img className="img" src={Admin}/>
                                                    <p className="name">Mr Demo(22)</p>
                                                    <p className="info">11/11/2011  10:23 PM</p>
                                                </Col>
                                                <Col sm={10} md={9} lg={9} className="commentDescription">
                                                    <p className="commentDescription">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                    </p>
                                                </Col>
                                                <li>
                                                    <Button variant="outline-danger" className="likeBtn btn">Like</Button>
                                                    <Button variant="outline-success" className="replyBtn btn">Reply</Button>
                                                </li>
                                                <hr className="bg-dark parentHR"/>
                                            </Row>
                                        </Row>

                                    </Row>
                                    <Row className="commentCard">
                                        <Row className="parentComment">
                                            <Col sm={2} md={3} lg={3} className="authorBio">
                                                <img className="img" src={Admin}/>
                                                <p className="name">Mr Demo(22)</p>
                                                <p className="info">11/11/2011  10:23 PM</p>
                                            </Col>
                                            <Col sm={10} md={9} lg={9} className="commentDescription">
                                                <p className="commentDescription">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    It has survived not only five centuries, but also the leap into electronic typesetting.
                                                </p>

                                            </Col>
                                            <li>
                                                <Button variant="outline-danger" className="likeBtn btn">Like</Button>
                                                <Button variant="outline-success" className="replyBtn btn" onClick={this.reply}>Reply</Button>
                                            </li>
                                            <Row className={this.state.replyCommentBox}>
                                                <Col sm={12} md={12} lg={12} className="commentBoxCol">
                                                    <Form>
                                                        <Form.Control
                                                            as="textarea"
                                                            placeholder="Leave a comment here"
                                                            style={{ height: '100px' }}
                                                            className="textArea"
                                                        />
                                                        <Button variant="outline-secondary" className="submitBtn">
                                                            Post
                                                        </Button>
                                                    </Form>
                                                </Col>
                                            </Row>
                                            <hr className="bg-dark parentHR"/>
                                            <Row className="childComment">
                                                <Col sm={2} md={3} lg={3} className="authorBio">
                                                    <img className="img" src={Admin}/>
                                                    <p className="name">Mr Demo(22)</p>
                                                    <p className="info">11/11/2011  10:23 PM</p>
                                                </Col>
                                                <Col sm={10} md={9} lg={9} className="commentDescription">
                                                    <p className="commentDescription">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </Col>
                                                <li>
                                                    <Button variant="outline-danger" className="likeBtn btn">Like</Button>
                                                    <Button variant="outline-success" className="replyBtn btn" onClick={this.reply}>Reply</Button>
                                                </li>
                                                <Row className={this.state.replyCommentBox}>
                                                    <Col sm={12} md={12} lg={12} className="commentBoxCol">
                                                        <Form>
                                                            <Form.Control
                                                                as="textarea"
                                                                placeholder="Leave a comment here"
                                                                style={{ height: '100px' }}
                                                                className="textArea"
                                                            />
                                                            <Button variant="outline-secondary" className="submitBtn">
                                                                Post
                                                            </Button>
                                                        </Form>
                                                    </Col>
                                                </Row>
                                                <hr className="bg-dark parentHR"/>
                                            </Row>
                                        </Row>

                                    </Row>
                                </Col>
                            </Row>

                        </Container>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
