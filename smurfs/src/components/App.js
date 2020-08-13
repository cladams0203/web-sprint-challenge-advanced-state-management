import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions/smurfActions'
import SmurfList from './SmurfList'
import Form from './Form'
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSmurfs()
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.loading && <h2>Loading....</h2>}
        <Form />
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
