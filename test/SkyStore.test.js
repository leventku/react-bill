import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SkyStore from '../src/SkyStore';

function setupComponent() {
  const props = {
    data: {
      "rentals": [
        { "title": "50 Shades of Grey", "cost": 4.99 }
      ],
      "buyAndKeep": [
        { "title": "That's what she said", "cost": 9.99 },
        { "title": "Brokeback mountain", "cost": 9.99 }
      ],
      "total": 24.97
    }
  }

  const wrapper = shallow(<SkyStore {...props} />)

  return  {
    props,
    wrapper
  }
}

describe('SkyStore component', () => {
  it('should render', () => {
    const {wrapper} = setupComponent();
    expect(wrapper.exists()).toBe(true);
  })

  it('should render its items', () => {
    const {wrapper} = setupComponent();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})