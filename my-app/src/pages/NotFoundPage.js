import React, { Component, Fragment } from 'react'
import NotFound from '../component/NotFound/NotFound'
import TopNavigation from '../component/TopNavigation/TopNavigation'

export default class NotFoundPage extends Component {
    render() {
        return (
            <Fragment>
                 <div className="HomePageSection">
                    <TopNavigation/>
                    <NotFound/>
                </div>
            </Fragment>
        )
    }
}
