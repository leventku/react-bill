import React from 'react';

import BillGroup from './BillGroup';

function TestStore(props) {
  const prepareItems = (data) => {
    let allItems = [];
    Object.keys(data).filter( key => key !== 'total').forEach( category => {
      data[category].forEach(item => {
        allItems.push(Object.assign({type: category}, item))
      })
    })
    return allItems;
  }

  const renderItem = (item, i) => (
    <li className="list-group-item justify-content-between" key={i}>
      <div>
        <span className="badge badge-primary" style={{width: 100}}>{item.type}</span>
        <span className="name" style={{padding: '0 10px'}}>{item.title}</span>
      </div>
      <span className="cost">£{item.cost.toFixed(2)}</span>
    </li>
  )

  return (
    <BillGroup 
      title="Sky Store"
      items={prepareItems(props.data)}
      itemRenderer={renderItem}
      total={props.data.total}
    />
  )
}

export default TestStore;