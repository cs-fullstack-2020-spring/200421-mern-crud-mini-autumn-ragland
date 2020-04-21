import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports to use Router
import CardHolderDetails from './CardHolderDetails';

class AllCardHolders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolders : []
        }
    }
    // load mock data into array
    componentDidMount = () => {
        this.loadData();
    }
    // get all documents from api endpoint
    loadData = async () => {
        const response = await fetch('/api');
        const json = await response.json();
        // console.table(json);
        this.setState({cardHolders : json});

    }

    render() {
        return (
            <div>
                <h3>Display All Card Holders</h3>
                {
                    this.state.cardHolders.map((cardHolder) => {
                        return(
                            <div key = {cardHolder._id}>
                                <Link to = {`/details/${cardHolder.cardNumber}`}>Details</Link>
                            <p>{cardHolder.cardHolderName}</p>
                            <p>{cardHolder.cardNumber}</p>
                            <hr/>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default AllCardHolders;