import React, { Component, Fragment } from 'react'
import SinglePost from '../component/SinglePost/SinglePost'
import TopNavigation from '../component/TopNavigation/TopNavigation'

export default class SinglePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <SinglePost/>
                </div>
            </Fragment>
        )
    }
}
