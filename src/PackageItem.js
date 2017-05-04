import React from 'react';

export default function PackageItem(props) {
  return (
    <li className="list-group-item justify-content-between" key={props.item.name}>
      <div>
        <span className="badge badge-primary" style={{width: 100}}>{props.item.type}</span>
        <span className="name" style={{padding: '0 10px'}}>{props.item.name}</span>
      </div>
      <span className="cost">£{props.item.cost.toFixed(2)}</span>
    </li>
  )
}