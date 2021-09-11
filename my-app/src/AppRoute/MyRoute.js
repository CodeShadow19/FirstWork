import React, { Component, Fragment } from 'react'
import {Route, Switch} from "react-router-dom";
import Home from '../pages/HomePage'
import AdminProfile from '../pages/AdminProfilePage'
import AddNew from '../pages/AddNewPage'
import SignInPage from '../pages/SignInPage'
import SinglePage from '../pages/SinglePage'
import UserProfile from '../pages/UserProfilePage'
import UserList from '../pages/UserListPage'
import NotFound  from '../pages/NotFoundPage'
import Registration from '../pages/RegistrationPage';
import SingleUserPage from "../pages/SingleUserPage";

export default class MyRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/adminProfile" component={AdminProfile} />
                    <Route exact path="/addNew" component={AddNew} />
                    <Route exact path="/signInPage" component={SignInPage} />
                    <Route exact path="/singlePage" component={SinglePage} />
                    <Route exact path="/userProfile" component={UserProfile} />
                    <Route exact path="/allUsers" component={UserList} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/singleUser" component={SingleUserPage} />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        )
    }
}
