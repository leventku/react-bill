import React from 'react';

export default ({ details: { generated, due, period }, total }) => {
  return (
    <div className="bill-header jumbotron">
      <h1>Your Sky Bill</h1>
      <h3>Issue Date: {generated}</h3>
      <h3>Due Date: {due}</h3>
      <h3>Bill Period: {period.from} - {period.to}</h3>
      <h3>Monthly Total: {total}</h3>
    </div>
  )
}