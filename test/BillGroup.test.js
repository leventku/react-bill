import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BillGroup from '../src/BillGroup';

function setupComponent() {
  const props = {
    title: 'Some title',
    items: [1, 2, 3, 4, 5],
    itemRenderer: jest.fn(),
    total: 123,
  };

  const wrapper = shallow(<BillGroup {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('BillGroup component', () => {
  it('should render', () => {
    const { wrapper } = setupComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render its items', () => {
    const { wrapper } = setupComponent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call itemRenderer function 3 times initially', () => {
    const { props } = setupComponent();
    expect(props.itemRenderer.mock.instances.length).toBe(3);
  });

  it('should call itemRenderer function 5 times after show all button is clicked', () => {
    const { props, wrapper } = setupComponent();
    wrapper.find('button').simulate('click');
    expect(props.itemRenderer.mock.instances.length).toBe(8);
    wrapper.find('button').simulate('click');
    expect(props.itemRenderer.mock.instances.length).toBe(11);
  });
});
