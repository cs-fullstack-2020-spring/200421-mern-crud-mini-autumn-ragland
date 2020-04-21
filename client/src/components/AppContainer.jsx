import React, { Component } from 'react';
import AllCardHolders from './AllCardHolders';
import CreatCardHolder from './CreateCardHolder';
import CardHolderDetails from './CardHolderDetails';
import UpdateCardHolder from './UpdateCardHolder';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports for routing

// class based container component to handle routing
class AppContainer extends Component {
    // useless constructor
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // display links for display all and create pages 
    // define routes for details and update pages
    // link for details in display all component
    // link for update in details component
    render() {
        return (
            <div>
                <h1>Library Card Holder Database</h1>
                <Router>
                    <Link class="pageLink" to="/display">Display All</Link>
                    <Link class="pageLink" to="/create">Create</Link>
                    <Route path="/create">
                        <CreatCardHolder />
                    </Route>
                    <Route path="/display">
                        <AllCardHolders />
                    </Route>
                    <Route path={`/details/:cardNumber`} component={CardHolderDetails}></Route>
                    <Route path={`/update/:cardNumber`} component={UpdateCardHolder}></Route>
                </Router>
            </div>
        )
    }
}

export default AppContainer;