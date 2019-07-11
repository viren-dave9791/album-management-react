import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    age: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
  
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)