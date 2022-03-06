import React, {Component} from "react";

export class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "default message", 
        }    
        this.handleChange = this.handleChange.bind(this);
    }
 
    handleChange(event) {
        this.setState({ 
            message: event.target.value
        });
    }

    render() {
        return (
            <>
                <h1>InputText</h1>
                <h4>{this.state.message}</h4>
                <hr />
                <input type="text" 
                    value={this.state.message} 
                    onChange={this.handleChange}></input>
            </>
        );
    }
}

