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

<<<<<<< HEAD
	render() {
		return (
			<div className="App">
				<AllStudents changeStudent={this.changeStudent} />
				<Student updateStudents = {this.updateStudents} currentStudent={this.state.currentStudent} />
                    

			</div>
		)
	}
=======
  changeLocation = (location) => {
    this.setState({location})
  }
>>>>>>> 1ea10cf344c46957233edc11240a14e9036d3fc7

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