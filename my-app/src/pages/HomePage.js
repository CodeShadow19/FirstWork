import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import ThumbnailSection from '../component/ThumbnailSection/ThumbnailSection'
import LatestPostSection from '../component/LatestPostSection/LatestPostSection'
import '../assets/css/custom.css'

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <ThumbnailSection/>
                    <LatestPostSection/>
                </div>
            </Fragment>
        )
    }
}
