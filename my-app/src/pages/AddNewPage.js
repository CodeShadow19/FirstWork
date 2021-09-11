import React, { Component, Fragment } from 'react'
import AddNewPost from '../component/AddNewPost/AddNewPost'
import TopNavigation from '../component/TopNavigation/TopNavigation'

export default class AddNewPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <AddNewPost/>
                </div>
            </Fragment>
        )
    }
}
