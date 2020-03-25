import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';

describe('Component [Button]', () => {
  it('should render correctly', () => {
    const component = shallow(<Button text="test" />);

    expect(component).toHaveLength(1);
  });
});
