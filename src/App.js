import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import BillHeader from './BillHeader';
import PackageCharges from './PackageCharges';
import CallCharges from './CallCharges';
import SkyStore from './SkyStore';

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
    if(this.state.data === null) {
      return (<h1>Loading...</h1>)
    }
    
    const {statement, total, package: packageData, callCharges, skyStore} = this.state.data;

    return (
      <div className="App container">
        <BillHeader 
          details={statement} 
          total={total}
        />
        <PackageCharges
          data={packageData}
        />
        <CallCharges
          data={callCharges}
        />
        <SkyStore 
          data={skyStore}
        />
      </div>
    );
  }
}

export default App;
