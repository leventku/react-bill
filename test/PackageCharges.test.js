import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PackageCharges from '../src/PackageCharges';

function setupComponent() {
  const props = {
    data: {
      subscriptions: [
        { type: 'tv', name: 'Variety with Movies HD', cost: 50.00 },
      ],
    },
  };

  const wrapper = shallow(<PackageCharges {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('PackageCharges component', () => {
  it('should render', () => {
    const { wrapper } = setupComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render its items', () => {
    const { wrapper } = setupComponent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
