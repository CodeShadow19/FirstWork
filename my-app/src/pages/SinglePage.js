import React, { Component, Fragment } from 'react'
import SinglePost from '../component/SinglePost/SinglePost'
import TopNavigation from '../component/TopNavigation/TopNavigation'

export default class SinglePage extends Component {
    constructor({match}){
        super()
        this.state={
            id:match.params.id,
            title:match.params.title
        }
    }
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <SinglePost id={this.state.id} title={this.state.title}/>
                </div>
            </Fragment>
        )
    }
}
