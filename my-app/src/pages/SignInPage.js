import React, { Component,Fragment } from 'react'
import SignInForm from '../component/SignInForm/SignInForm'
import TopNavigation from '../component/TopNavigation/TopNavigation'

export default class SignInPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <SignInForm/>
                </div>
            </Fragment>
        )
    }
}
