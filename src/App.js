import React, { Component } from 'react';
import './App.css';
import ContactView from "./components/ContactView/contact-view";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="contactsContainer">
          <ContactView/>
        </div>
      </div>
    );
  }
}

export default App;
