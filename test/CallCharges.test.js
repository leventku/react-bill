import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CallCharges from '../src/CallCharges';

function setupComponent() {
  const props = {
    data: {
      calls: [
        { called: '1', duration: '2', cost: 3 },
        { called: '2', duration: '2', cost: 3 },
        { called: '3', duration: '2', cost: 3 },
      ],
    },
  };

  const wrapper = shallow(<CallCharges {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('CallCharges component', () => {
  it('should render', () => {
    const { wrapper } = setupComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render its items', () => {
    const { wrapper } = setupComponent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
