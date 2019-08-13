import React from 'react';
import Card from '../Card';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

it('renders Card component without crashing', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toMatchSnapshot();
});
