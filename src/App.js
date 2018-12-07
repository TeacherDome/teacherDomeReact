import React, { Component } from 'react';
import MainStudentPage from './Main/MainStudentPage'
import Container from './Main/Container'
import Header from './Main/Header'
import Main from './Main/Main'
import MainResourcePage from './Main/MainResourcePage'
import MainTreasuryPage from './Main/MainTreasuryPage'


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