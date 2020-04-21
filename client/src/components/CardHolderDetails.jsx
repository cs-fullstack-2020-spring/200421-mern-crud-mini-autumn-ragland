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
        console.log(this.props.match.params.cardNumber)
    }
    // get all documents from api endpoint
    loadData = async () => {
        const response = await fetch(`/api/${this.props.match.params.cardNumber}`);
        const json = await response.json();
        console.log(json);
        // this.setState({cardHolders : json});
    }

    // TODO add delete event handler - fetch

    render() {
        return (
            <div>
                <h3>Individual Card Holder Details Page</h3>
                <Link to={`/update/${this.state.cardNumber}`}><button>Update</button></Link>
                <button>Delete</button>
            </div>
        )
    }
}

export default CardHolderDetails;