import React, { Component, Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Csharp from '../../assets/image/Csharp.svg'
import Cplus from '../../assets/image/c++.png'
import Python from '../../assets/image/python.png'
import Dart from '../../assets/image/dart.svg'
import Kotlin from '../../assets/image/kotlin.png'
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class LatestPostSection extends Component {
    /*constructor(){
        super()
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomePostData).then(result=>{
            if(result==null){
                alert("Data Is Empty!");
            }else{
                this.setState({myData:result})
            }
        })
    }*/

    render() {
        return (
            <Fragment>
                <div className="middleContainer LatestPostSection">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <h5 className="latestPost">Latest Post...</h5>
                            </Col>
                        </Row><hr/>
                        <Row>
                            <Col sm={2} md={2} lg={2}>
                                <Link to="/singlePage"><img className="postFeaturedImg" src={Cplus} /></Link>
                            </Col>
                            <Col sm={10} md={10} lg={10}>
                                <Link to="/singlePage"><h4 className="postTitle">What do you think about C++?</h4></Link>
                                <p className="postInfo">No Replies | Mr Demo in python on 11/11/2011 on 8:25 PM</p>
                            </Col>
                        </Row><hr/>
                        <Row>
                            <Col sm={2} md={2} lg={2}>
                                <Link to="/singlePage"><img className="postFeaturedImg" src={Csharp} /></Link>
                            </Col>
                            <Col sm={10} md={10} lg={10}>
                                <Link to="/singlePage"><h4 className="postTitle">What do you think about C#?</h4></Link>
                                <p className="postInfo">No Replies | Mr Demo in python on 11/11/2011 on 8:25 PM</p>
                            </Col>
                        </Row><hr/>
                        <Row>
                            <Col sm={2} md={2} lg={2}>
                                <Link to="/singlePage"><img className="postFeaturedImg" src={Python} /></Link>
                            </Col>
                            <Col sm={10} md={10} lg={10}>
                                <Link to="/singlePage"><h4 className="postTitle">What do you think about Python?</h4></Link>
                                <p className="postInfo">No Replies | Mr Demo in python on 11/11/2011 on 8:25 PM</p>
                            </Col>
                        </Row><hr/>
                        <Row>
                            <Col sm={2} md={2} lg={2}>
                                <Link to="/singlePage"><img className="postFeaturedImg" src={Dart} /></Link>
                            </Col>
                            <Col sm={10} md={10} lg={10}>
                                <Link to="/singlePage"><h4 className="postTitle">What do you think about Dart?</h4></Link>
                                <p className="postInfo">No Replies | Mr Demo in python on 11/11/2011 on 8:25 PM</p>
                            </Col>
                        </Row><hr/>
                        <Row>
                            <Col sm={2} md={2} lg={2}>
                                <Link to="/singlePage"><img className="postFeaturedImg" src={Kotlin} /></Link>
                            </Col>
                            <Col sm={10} md={10} lg={10}>
                                <Link to="/singlePage"><h4 className="postTitle">What do you think about Kotlin?</h4></Link>
                                <p className="postInfo">No Replies | Mr Demo in python on 11/11/2011 on 8:25 PM</p>
                            </Col>
                        </Row><hr/>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
