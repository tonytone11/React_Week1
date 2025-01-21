import React, { Component } from "react";

class BasicInfo extends Component {
    render() {
        const { name, DoB } = this.props.person;
        return (
            <section className='main-container'>
                <div className='boxes'>
                    <p>Name: {name}</p>
                    <p>Date of Birth: {DoB}</p>
                </div>
            </section>

        );
    }
}

export default BasicInfo;