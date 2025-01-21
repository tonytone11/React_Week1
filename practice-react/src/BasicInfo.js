import React, { Component } from "react";

class BasicInfo extends Component {
    render() {
        const { name, DoB } = this.props.person;
        return (
            <div>
                <p>Name: {name}</p>
                <p>Date of Birth: {DoB}</p>
            </div>
        );
    }
}

export default BasicInfo;