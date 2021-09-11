import React, { Component,Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import UserList from '../component/UserList/UserList'

export default class UserListPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <UserList/>
                </div>
            </Fragment>
        )
    }
}
