import React from 'react';
import moment from 'moment';

export default ({ details: { generated, due, period }, total }) => {
  const formatDate = date => (
    moment(date).format('DD MMM YYYY')
  );

  return (
    <div className="bill-header jumbotron">
      <h1>Your Sky Bill</h1>
      <h5>Issue Date: {formatDate(generated)}</h5>
      <h5>Due Date: {formatDate(due)}</h5>
      <h5>Bill Period: {formatDate(period.from)} - {formatDate(period.to)}</h5>
      <h2>Month Total: £{total}</h2>
    </div>
  )
}