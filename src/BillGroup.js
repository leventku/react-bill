import React, { Component } from 'react';

export default class BillGroup extends Component {
  constructor(props) {
    super(props);
    const minVisible = 3;
    this.state = {
      minVisible,
      maxVisible: props.items.length,
      visibleRows: minVisible
    }
  }

  toggleShowAll = () => {
    this.setState((prevState) => {
      if (prevState.visibleRows === prevState.minVisible) {
        return {visibleRows: prevState.maxVisible}
      }
      else {
        return {visibleRows: prevState.minVisible}
      }
    })
  }

  render() {
    return (
      <div className="bill-group">
        <h2>{this.props.title}: £{this.props.total.toFixed(2)}</h2>
        <div className="bill-list-container">
          <ul className="list-group">
            {
              this.props.items.slice(0, this.state.visibleRows).map(this.props.itemRenderer)
            }
          </ul>
          <button onClick={this.toggleShowAll} style={{display: this.state.maxVisible > this.state.minVisible ? 'inline-block': 'none'}}>
            {this.state.visibleRows === this.state.minVisible ? 'Show All': 'Show Less'}
          </button>
        </div>
      </div>
    )
  }
}