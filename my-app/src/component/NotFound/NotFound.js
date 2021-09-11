import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <div className="middleSection">
                    <Container className="text-center">
                        <Row>
                            <Col>
                                <h1>Page Not Found!</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
