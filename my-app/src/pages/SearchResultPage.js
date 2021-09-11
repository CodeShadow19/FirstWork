import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import ThumbnailSection from "../component/ThumbnailSection/ThumbnailSection";
import SearchSection from "../component/SearchSection/SearchSection";

class SearchResultPage extends Component {
    constructor({match}){
        super()
        this.state={
            myData:match.params.myData
        }
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <ThumbnailSection/>
                <SearchSection myData={this.state.myData}/>
            </Fragment>
        );
    }
}

export default SearchResultPage;