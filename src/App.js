import React, { Component } from 'react';
import Header from './Header';
import Profiles from './Profiles';
import Footer from './Footer';
import './App.css';

let apiURL = "./dinosaurs.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileArray: []
    }
  }
  componentDidMount(){
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      this.setState({profileArray: data})
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">
          <Profiles profiles = {this.state.profileArray}/>
          </ul>
        </section>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
