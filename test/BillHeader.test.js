import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BillHeader from '../src/BillHeader';

function setupComponent() {
  const props = {
    details: {
      generated: 1,
      due: 2,
      period: {
        from: 3,
        to: 4
      },
    },
    total: 5
  }

  const wrapper = shallow(<BillHeader {...props} />)

  return  {
    props,
    wrapper
  }
}

describe('BillHeader component', () => {
  it('should render', () => {
    const {wrapper} = setupComponent();
    expect(wrapper.exists()).toBe(true);
  })

  it('should render its items', () => {
    const {wrapper} = setupComponent();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})