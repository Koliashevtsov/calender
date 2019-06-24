import React from 'react';
import logo from '../.././logo.svg';
import PropTypes from 'prop-types';
import './App.css';

import Month from '../month/Month';
import Header from '../header/Header';

class App extends React.Component {
  state = {
    month: new Date().getUTCMonth(),
    year: new Date().getUTCFullYear(),
    }

  handlePrevMonth = () => {
    this.setState((state, props) => ({
      month: state.month - 1
    }))
  }

  handleNextMonth = () => {
    this.setState((state, props) => ({
      month: state.month + 1
    }))
  }

  handleCurrentMonth = () => {
    this.setState((state, props) => ({
      month: new Date().getUTCMonth()
    }))
  }


  render(){
    const month = this.state.month;
    const year = this.state.year;
    return (
      <div className="App">
        <Header month={month} year={year} onHandlePrev={this.handlePrevMonth} onHandleCur={this.handleCurrentMonth} onHandleNext={this.handleNextMonth}/>
        <Month month={month} year={year} />
      </div>
    );
  }

}



export default App;
