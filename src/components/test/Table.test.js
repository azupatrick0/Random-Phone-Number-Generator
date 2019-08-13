import React from 'react';
import Table from '../Table';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

it('renders Table component without crashing', () => {
  const wrapper = shallow(<Table />);
  expect(wrapper).toMatchSnapshot();
});
