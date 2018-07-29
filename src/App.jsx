import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadLine: 'December 25, 2018',
      newDeadLine: ''
    }
  }

  changeDeadLine() {
    this.setState({deadLine: this.state.newDeadLine});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title" >
          Countdown to {this.state.deadLine}
        </div>
        <Clock
          deadLine={this.state.deadLine}
        />
        <Form inline>
          <FormControl className='DeadLine-input'
            placeholder='new date'
            onChange={event => this.setState({newDeadLine: event.target.value})}
          />
          <Button onClick={() => this.changeDeadLine()}>Submit</Button>
        </Form>

      </div>
    )
  }
}

export default App;
