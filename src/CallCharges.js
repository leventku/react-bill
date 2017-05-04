import React from 'react';

import BillGroup from './BillGroup';

function CallCharges(props) {
  const renderItem = (item, i) => (
    <li className="list-group-item justify-content-between" key={i}>
      <span className="number" style={{width: 100}}>{item.called}</span>
      <span className="duration">{item.duration}</span>
      <span className="cost">£{item.cost.toFixed(2)}</span>
    </li>
  );

  return (
    <BillGroup
      title="Call Charges"
      items={props.data.calls}
      itemRenderer={renderItem}
      total={props.data.total}
    />
  )
}

export default CallCharges;
