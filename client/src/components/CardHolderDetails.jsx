import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports to use Router

// class based component to fetch one card holder's details, display those details, route to update form, and delete card holder
class CardHolderDetails extends Component {
    constructor(props) {
        super(props);
        // card holder details
        this.state = {
            cardHolderName: "",
            cardHolderNumber: 0,
            cardNumber: 0,
            cardHolderZipCode: "",
        }
    }
    // call async fetch
    componentDidMount = () => {
        this.loadData();
    }
    // get one document from collection
    loadData = async () => {
        // fetch from endpoint with query param
        const response = await fetch(`/api/${this.props.match.params.cardNumber}`);
        // pull out json data
        const json = await response.json();
        // console.log(json); // check json data returned in console
        // update props of state to returned json data
        this.setState({
            cardHolderName: json.cardHolderName,
            cardHolderNumber: json.cardHolderNumber,
            cardNumber: json.cardNumber,
            cardHolderZipCode: json.cardHolderZipCode,
        });
    }

    // event handler when delete button is clicked
    handleDeletion = async () => {
        // fetch from delete endpoint with query param
        let response = await fetch(`/api/${this.props.match.params.cardNumber}`, {
            method: "DELETE"
        });
        // pull out json data
        let json = await response.json();
        // console.log(json); // check deleted document in console
    }

    // display one card holder's full details (name, number card number, zip code)
    // button to update card holder's details links to update page (route in app container)
    // button to delete with event listener
    render() {
        return (
            <div>
                <h3>Individual Card Holder Details Page</h3>

                <p>Card Holder Name : {this.state.cardHolderName}</p>
                <p>Card Holder Phone Number : {this.state.cardHolderNumber}</p>
                <p>Card Number : {this.state.cardNumber}</p>
                <p>Card Holder Zip Code : {this.state.cardHolderZipCode}</p>

                <Link to={`/update/${this.state.cardNumber}`}><button>Update</button></Link>
                <button onClick={this.handleDeletion}>Delete</button>
            </div>
        )
    }
}

export default CardHolderDetails;