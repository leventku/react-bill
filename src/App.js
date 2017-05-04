import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import BillGroup from './BillGroup';
import BillHeader from './BillHeader';

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

  renderCallItem = (item, i) => (
    <li className="list-group-item justify-content-between" key={i}>
      <span className="number" style={{width: 100}}>{item.called}</span>
      <span className="duration">{item.duration}</span>
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
        <BillGroup
          title="Call Charges"
          items={this.state.data.callCharges.calls}
          itemRenderer={this.renderCallItem}
          total={this.state.data.callCharges.total} 
        />
        
      </div>
    );
  }
}

export default App;
