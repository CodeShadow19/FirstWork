import React, { Component, Fragment } from 'react'
import AdminProfile from '../component/AdminProfile/AdminProfile'
import TopNavigation from '../component/TopNavigation/TopNavigation'

export default class AdminProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <AdminProfile/>
                </div>
            </Fragment>
        )
    }
}
