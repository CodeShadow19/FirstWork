import React, { Component, Fragment } from 'react'
import RegistrationSection from '../component/RegistrationSection/RegistrationSection'
import TopNavigation from '../component/TopNavigation/TopNavigation'

export default class RegistrationPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <RegistrationSection/>
                </div>
            </Fragment>
        )
    }
}
