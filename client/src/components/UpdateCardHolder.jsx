import React, { Component } from 'react';

// class based component to update an existing document
class UpdateCardHolder extends Component {
    constructor(props) {
        super(props);
        // card holder details
        this.state = {
            cardHolderName: "",
            cardHolderNumber: 0,
            cardNumber: "",
            cardHolderZipCode: 0,
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
        // console.log(json); // check returned json data from fetch
        // set props of state to documents initial value
        this.setState({
            cardHolderName: json.cardHolderName,
            cardHolderNumber: json.cardHolderNumber,
            cardNumber: json.cardNumber,
            cardHolderZipCode: json.cardHolderZipCode,
        });
    }

    // event handler to update state based on form input fields
    // don't allow typing in card number field
    handleChange = (event) => {
        if (event.target.name === "cardHolderName") {
            this.setState({ cardHolderName: event.target.value });
        } else if (event.target.name === "cardHolderNumber") {
            this.setState({ cardHolderNumber: event.target.value });
        } else if (event.target.name === "cardHolderZipCode") {
            this.setState({ cardHolderZipCode: event.target.value });
        }
    }

    // event handler to update existing document from form submission
    handleSubmission = async (event) => {
        event.preventDefault(); // keep page from reloading

        // object for form submission
        let formSubmission = {
            cardHolderName: this.state.cardHolderName,
            cardHolderNumber: this.state.cardHolderNumber,
            cardNumber: this.state.cardNumber,
            cardHolderZipCode: this.state.cardHolderZipCode
        }

        // fetch put endpoint with query params
        let response = await fetch(`/api/${this.props.match.params.cardNumber}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // send form submission in request body
            body: JSON.stringify(formSubmission)
        });
        // pull out json data
        let json = await response.json();
        // console.log(json); // check returned json data
    }

    // display form with card holder's current information
    // submission button with event handler
    render() {
        return (
            <div>
                <h3>Form To Update Card Holder</h3>
                <form>
                    <div className="inputGroup">
                        <label htmlFor="cardHolderName">Name : </label>
                        <input type="text" id="cardHolderName" name="cardHolderName" value={this.state.cardHolderName} onChange={this.handleChange} />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="cardHolderNumber">Phone Number : </label>
                        <input type="number" id="cardHolderNumber" name="cardHolderNumber" value={this.state.cardHolderNumber} onChange={this.handleChange} />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="cardNumber">Card Number : </label>
                        <input type="number" id="cardNumber" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange} />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="cardHolderZipCode">Zip Code : </label>
                        <input type="number" id="cardHolderZipCode" name="cardHolderZipCode" value={this.state.cardHolderZipCode} onChange={this.handleChange} />
                    </div>

                    <button onClick={this.handleSubmission}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UpdateCardHolder;