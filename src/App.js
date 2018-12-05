import React, { Component } from 'react';

import './App.css';
import MainStudentPage from './MainStudentPage'
import Container from './Container'
import Header from './Header'
import Main from './Main'
import MainResourcePage from './MainResourcePage'
import MainTreasuryPage from './MainTreasuryPage'


class App extends Component {
    constructor() {
    super()
    this.state = {
      isMain: true,
      location: ''
    }
  }
    toggleIsMain = () => {
    this.setState({isMain: !this.state.isMain})
  }

  changeLocation = (location) => {
    this.setState({location})
  }

  render() {
    return (
      <div className="App">
      <Header changeLocation={this.changeLocation} />
         <Container>
          {this.state.location === 'home'
          ? <Main />
          : this.state.location === 'students'
          ? <MainStudentPage />
          :this.state.location === 'resourses'
          ?<MainResourcePage />
          :this.state.location === 'treasury'
          ?<MainTreasuryPage />
          : <Main />}
        </Container>
      </div>
    );
  }
}

export default App;