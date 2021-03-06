import React from 'react';
import PropTypes from 'prop-types';

import BillGroup from './BillGroup';

function SkyStore(props) {
  const prepareItems = (data) => {
    const allItems = [];
    Object.keys(data).filter(key => key !== 'total').forEach((category) => {
      const formattedCategory = category === 'buyAndKeep' ? 'buy and keep' : category;
      data[category].forEach((item) => {
        allItems.push(Object.assign({ type: formattedCategory }, item));
      });
    });
    return allItems;
  };

  const renderItem = (item, i) => (
    <li className="list-group-item justify-content-between" key={i}>
      <span className="badge badge-primary store-type">{item.type}</span>
      <span className="name">{item.title}</span>
      <span className="cost">£{item.cost.toFixed(2)}</span>
    </li>
  );

  return (
    <BillGroup
      title="Sky Store"
      items={prepareItems(props.data)}
      itemRenderer={renderItem}
      total={props.data.total}
    />
  );
}

SkyStore.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.number,
  }).isRequired,
};

export default SkyStore;
