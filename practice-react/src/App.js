import './App.css';
import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

// Very-Easy 
class App extends Component {
  // Easy
  constructor(props) {
    super(props);
    this.state = {

      // Medium
      // person: {
      //   name: 'Anthony Montesdeoca',
      //   DoB: '08-27-01',
      // },

      // Hard
      people: [
        { name: 'Anthony Montesdeoca', DoB: '08-27-01', job: 'apprentice' },
        { name: 'John Doe', DoB: '12-24-01', job: 'police officer' },
        { name: 'Jane Doe', DoB: '04-10-01', job: 'teacher' },
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>People Info</h1>
        {/* Easy */}
        {/* <p>Name: Anthony Montesdeoca</p>
        <p>Date of Birth: 08-27-01</p> */}

        {/* Medium */}
        {/* <BasicInfo person={this.state.person} /> */}

        {/* Hard */}
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
