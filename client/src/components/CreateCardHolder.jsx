import React, { Component } from 'react';

class CreatCardHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolderName: "",
            cardHolderNumber: 0,
            cardNumber: "",
            cardHolderZipCode : 0,
        }
    }

    handleChange = (event) => {
        if(event.target.name === "cardHolderName"){
            this.setState({cardHolderName : event.target.value});
        } else if(event.target.name === "cardHolderNumber"){
            this.setState({cardHolderNumber : event.target.value});
        } else if(event.target.name === "cardNumber"){
            this.setState({cardNumber : event.target.value});
        } else if(event.target.name === "cardHolderZipCode"){
            this.setState({cardHolderZipCode : event.target.value});
        }
    }

    handleSubmission = async(event) => {
        event.preventDefault();
        // console.table(this.state);

        // object for form submission
        let formSubmission = {
            cardHolderName : this.state.cardHolderName,
            cardHolderNumber : this.state.cardHolderNumber,
            cardNumber : this.state.cardNumber,
            cardHolderZipCode : this.state.cardHolderZipCode
        }
        
        // add document via api endpoint
        let response = await fetch('/api', {
            method : "POST",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(formSubmission)
        });
        let json = await response.json();
        console.table(json);
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

export default CreatCardHolder;