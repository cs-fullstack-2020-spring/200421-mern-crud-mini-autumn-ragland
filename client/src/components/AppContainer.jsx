import React, { Component } from 'react';
import AllCardHolders from './AllCardHolders';
import CreatCardHolder from './CreateCardHolder';
import CardHolderDetails from './CardHolderDetails';
import UpdateCardHolder from './UpdateCardHolder';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports to use Router

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

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
                    <Route path={`/details/:cardNumber`} component = {CardHolderDetails}></Route>
                    <Route path={`/update/:cardNumber`} component = {UpdateCardHolder}></Route>
                </Router>
            </div>
        )
    }
}

export default AppContainer;