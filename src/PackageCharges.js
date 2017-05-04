import React from 'react';
import BillGroup from './BillGroup'

function PackageCharges(props) {
  const renderItem = (item) => (
    <li className="list-group-item justify-content-between" key={item.name}>
      <span className="badge badge-primary package-type">{item.type}</span>
      <span className="name">{item.name}</span>
      <span className="cost">£{item.cost.toFixed(2)}</span>
    </li>
  )

  return (
    <BillGroup 
      title="Your Package"
      items={props.data.subscriptions}
      itemRenderer={renderItem}
      total={props.data.total}
    />
  )
}

export default PackageCharges;