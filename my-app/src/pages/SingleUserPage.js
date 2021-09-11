import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import UserProfile from "../component/UserProfile/UserProfile";

class SingleUserPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="HomePageSection">
                    <TopNavigation/>
                    <UserProfile/>
                </div>
            </Fragment>
        );
    }
}

export default SingleUserPage;