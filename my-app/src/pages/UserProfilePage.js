import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import UserProfile from '../component/UserProfile/UserProfile'

export default class UserProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <UserProfile/>
                </div>
            </Fragment>
        )
    }
}
