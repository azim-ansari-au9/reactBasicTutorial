import React, { Component } from 'react'

class App extends Component {
  state={
    count: 0
  }
  incNum=()=>{
    this.setState({
      count: this.state.count+1
    });
  }
  render() {
    //git console.log(this.state)
    return (
      <div>
      <h1>Counter App</h1>
      <button className='btn btn-dark' onClick={this.incNum}>click here {this.state.count}</button>
      </div>
    )
  }
}

export default App
