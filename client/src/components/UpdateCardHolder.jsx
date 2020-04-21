import React, { Component } from 'react';

class UpdateCardHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolderName: "",
            cardHolderNumber: 0,
            cardNumber: "",
            cardHolderZipCode: 0,
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        if (event.target.name === "cardHolderName") {
            this.setState({ cardHolderName: event.target.value });
        } else if (event.target.name === "cardHolderNumber") {
            this.setState({ cardHolderNumber: event.target.value });
        } else if (event.target.name === "cardNumber") {
            this.setState({ cardNumber: event.target.value });
        } else if (event.target.name === "cardHolderZipCode") {
            this.setState({ cardHolderZipCode: event.target.value });
        }
    }

    // TODO add put fetch

    handleSubmission = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h3>Form To Create Card Holder</h3>
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
                        <input type="text" id="cardNumber" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange} />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="cardHolderZipCode">State : </label>
                        <input type="text" id="cardHolderZipCode" name="cardHolderZipCode" value={this.state.cardHolderZipCode} onChange={this.handleChange} />
                    </div>

                    <button onClick={this.handleSubmission}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UpdateCardHolder;