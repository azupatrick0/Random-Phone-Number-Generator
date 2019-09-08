import React from 'react';
import SideNav from '../SideNav';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

it('renders SideNav component without crashing', () => {
  const wrapper = shallow(<SideNav />);
  expect(wrapper).toMatchSnapshot();
});
