import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports to use Router

class CardHolderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolderName: "",
            cardHolderNumber: 0,
            cardNumber: 0,
            cardHolderZipCode: "",
        }
    }

    componentDidMount = () => {
        this.loadData();
    }
    // get all documents from api endpoint
    loadData = async () => {
        const response = await fetch(`/api/${this.props.match.params.cardNumber}`);
        const json = await response.json();
        // console.log(json);
        this.setState({
            cardHolderName: json.cardHolderName,
            cardHolderNumber: json.cardHolderNumber,
            cardNumber: json.cardNumber,
            cardHolderZipCode: json.cardHolderZipCode,
        });
    }

    // TODO add delete event handler - fetch
    handleDeletion = async() => {
        let response = await fetch(`/api/${this.props.match.params.cardNumber}`, {
            method : "DELETE"
        });
        let json = await response.json();
        console.table(json);
    }

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