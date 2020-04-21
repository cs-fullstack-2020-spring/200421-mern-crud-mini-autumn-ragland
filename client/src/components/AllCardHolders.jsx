import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports to use Router	

// class based component to fetch and render all documents from collection
class AllCardHolders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // array to hold fetched documents from collection
            cardHolders: []
        }
    }
    // call async fetch
    componentDidMount = () => {
        this.loadData();
    }
    // get all documents from collection
    loadData = async () => {
        // fetch from endpoint
        const response = await fetch('/api');
        // pull out json data
        const json = await response.json();
        // console.table(json); // check json data returned in console
        // update prop of state with json data from fetch
        this.setState({ cardHolders: json });
    }

    // map through json data from fetch with an display the card holder's name and card number
    // card holder's name links to card holder' details page (route defined in app container)
    render() {
        return (
            <div>
                <h3>Display All Card Holders</h3>
                {
                    this.state.cardHolders.map((cardHolder) => {
                        return (
                            <div key={cardHolder._id}>
                                <Link to={`/details/${cardHolder.cardNumber}`}>
                                {cardHolder.cardHolderName}</Link>
                                <p>{cardHolder.cardNumber}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default AllCardHolders;