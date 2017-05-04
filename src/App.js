import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import BillHeader from './BillHeader';
import BillGroup from './BillGroup';
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

  renderPackageItem = (item) => (
    <li className="list-group-item justify-content-between" key={item.name}>
      <div>
        <span className="badge badge-primary" style={{width: 100}}>{item.type}</span>
        <span className="name" style={{padding: '0 10px'}}>{item.name}</span>
      </div>
      <span className="cost">£{item.cost.toFixed(2)}</span>
    </li>
  )

  renderSkyStoreItem = (item, i) => (
    <li className="list-group-item justify-content-between" key={i}>
      <div>
        <span className="badge badge-primary" style={{width: 100}}>{item.type}</span>
        <span className="name" style={{padding: '0 10px'}}>{item.title}</span>
      </div>
      <span className="cost">£{item.cost.toFixed(2)}</span>
    </li>
  )

  render() {
    if(this.state.data === null) {
      return (<h1>Loading...</h1>)
    }

    return (
      <div className="App container">
        <BillHeader 
          details={ this.state.data.statement } 
          total={this.state.data.total}
        />
        <BillGroup
          title="Your Package"
          items={this.state.data.package.subscriptions}
          itemRenderer={this.renderPackageItem}
          total={this.state.data.package.total} 
        />
        <CallCharges
          data={this.state.data.callCharges}
        />

        <SkyStore 
          data={this.state.data.skyStore}
        />
      </div>
    );
  }
}

export default App;
