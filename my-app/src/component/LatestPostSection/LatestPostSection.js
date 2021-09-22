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
    constructor(){
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
    }

    render() {
        const myList=this.state.myData;
        const myView=myList.map(myList=>{
            return <div>
                <Row>
                    <Col sm={2} md={2} lg={2}>
                        <Link to="/singlePage"><img className="postFeaturedImg" src={myList.post_img} /></Link>
                    </Col>
                    <Col sm={10} md={10} lg={10}>
                        <Link to={"/singlePage/"+myList.id+"/"+myList.post_title}><h4 className="postTitle">{myList.post_title}</h4></Link>
                        <p className="postInfo">No Replies | Mr Demo in python on {myList.date_time}</p>
                    </Col>
                </Row><hr/>
            </div>
        })
        return (
            <Fragment>
                <div className="middleContainer LatestPostSection">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <h5 className="latestPost">Latest Post...</h5>
                            </Col>
                        </Row><hr/>

                        {myView}
                    </Container>
                </div>
            </Fragment>
        )
    }
}
