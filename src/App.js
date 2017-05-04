import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }
  componentDidMount() {
    axios.get('https://still-scrubland-9880.herokuapp.com/bill.json')
      .then(response => {
        this.setState({data: response.data})
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
  render() {
    return (<h1>Loading...</h1>)
  }
}

export default App;
