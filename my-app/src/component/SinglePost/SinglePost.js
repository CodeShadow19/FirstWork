import React, { Component, Fragment } from 'react'
import { Button,Col,Row, Container } from 'react-bootstrap'
import Admin from '../../assets/image/2.jpg'
import {Link} from "react-router-dom";

export default class SinglePost extends Component {
    render() {
        return (
            <Fragment>
                <div className="singlePostPage">
                    <Container>
                        <Container className="postDetails">
                            <Row className="singlePostBanner">
                                <Col sm={12} md={8} lg={8} className="postTitle">
                                    <h2 className="title">This is my demo Post...</h2>
                                </Col>
                                <Col sm={12} md={4} lg={4} className="nextPost">
                                    <Button variant="secondary"><Link to="#">Demo Post</Link></Button>
                                </Col>
                            </Row>
                            <Row className="singlePost">
                                <Col sm={12} md={4} lg={4} className="adminDetails">
                                    <img className="adminImg" src={Admin}/>
                                    <p className="adminName">Mr Demo(22)</p>
                                    <p className="adminInfo">11/11/2011  10:23 PM Admin</p>
                                </Col>
                                <Col sm={12} md={8} lg={8} className="postDescription">
                                    <p className="description">Say about C#.....?</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="commentSection">
                            <Row className="commentPart">
                                <Col sm={12} md={4} lg={4} className="commentDetails">
                                    <img className="image" src={Admin}/>
                                    <p className="name">Mr Demo(22)</p>
                                    <p className="info">11/11/2011  10:23 PM Admin</p>
                                </Col>
                                <Col sm={12} md={8} lg={8} className="commentDescription">
                                    <p className="description">Say about C#.....?</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </Col>
                            </Row><hr/>
                            <Row className="commentPart">
                                <Col sm={12} md={4} lg={4} className="commentDetails">
                                    <img className="image" src={Admin}/>
                                    <p className="name">Mr Demo(22)</p>
                                    <p className="info">11/11/2011  10:23 PM Admin</p>
                                </Col>
                                <Col sm={12} md={8} lg={8} className="commentDescription">
                                    <p className="description">Say about C#.....?</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
